import { useRef, useState } from 'react';
import * as S from './CreatePost.styled'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../firebase/firebase'
import TextEditor from './TextEditor/TextEditor';

const CreatePost = () => {
    const errorElement = useRef()
    const [error, setError] = useState('')
    const [submitButtonContent, setSubmitButtonContent] = useState('Submit')
    const [canClickButton, setCanClickButton] = useState(true)
    const [titleValue, setTitleValue] = useState(null)
    const [imageURLValue, setImageURLValue] = useState(null)
    const [usernameValue, setUsernameValue] = useState(null)
    const [contentValue, setContentValue] = useState('')
    const [aboutValue, setAboutValue] = useState(null)
    // Fn to pass down to texteditor [Negative prop drilling]
    const fnSetContentValue = (newValue) => {
        setContentValue(newValue)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const values = [titleValue, imageURLValue, usernameValue, contentValue, aboutValue]
        const nullTest = values.includes(null) || values.includes('') 
        //First checking whether null
        if(nullTest===true){
            console.log('Null')
            setError('Form Incomplete')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        //Then checking rest (or null errors will occur here)
        const aboutTest = values[4].length>=250
        const usernameTest = values[0].length>=100
        const titleTest = values[0].length>=125
        const contentTest = values[3].length>=5000
        if(aboutTest===true){
            console.log('About')
            setError('About Section Too Long - 250 Characters Only')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(usernameTest===true){
            console.log('Username')
            setError('Username Too Long - 100 Charachters Only')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(titleTest===true){
            console.log('Title')
            setError('Title Too Long - 125 Charachters Only')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(contentTest===true){
            console.log('Content')
            setError('Content Too Long - 5000 Charachters Only')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        else{
            if(errorElement.current.classList.contains('displayOff')===false){
                errorElement.current.classList.add('displayOff')
            }
            sendData(values)
        }
    }
    //Data Transfer
    const sendData = async(values) => {
        console.log('Sending Data')
        const transferPackage = {
            title: values[0], imageURL: values[1], userName: values[2], text: values[3], about: values[4],
            created: new Date()
        }
        const dbRef = collection(db, "postData");
        try{
            setCanClickButton(false); setSubmitButtonContent('Sending')
            await addDoc(dbRef, transferPackage)
            if(errorElement.current.classList.contains('displayOff')===false){
                errorElement.current.classList.add('displayOff')
            }
            setSubmitButtonContent('Submission Sent')
            console.log('Data Sent')
        }catch(err){
            setError(err.message)
            setCanClickButton(true); setSubmitButtonContent('Submit')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
        }
    }
    return (
        <S.CreatePostContainer className='center'>
            <div className="createPost inner">
                <form onSubmit={handleFormSubmit}>
                    <div className="titleSection inpElement">
                        {/* <label htmlFor="titleInput">Title</label> */}
                        <input type="text" id='titleInput' placeholder='Post Title' onChange={(e)=> {setTitleValue(e.target.value)}}/>
                    </div>
                    <div className="imageSection inpElement com1">
                        {/* <label htmlFor="imageInput">Title</label> */}
                        <input type="text" id='imageInput' placeholder='Imgur Link' onChange={(e)=> {setImageURLValue(e.target.value)}}/>
                    </div>
                    <div className="usernameSection inpElement com1">
                        {/* <label htmlFor="usernameInput">Title</label> */}
                        <input type="text" id='usernameInput' placeholder='Username' onChange={(e)=> {setUsernameValue(e.target.value)}}/>
                    </div>
                    <div className="aboutSection inpElement com1">
                        {/* <label htmlFor="usernameInput">Title</label> */}
                        <input type="text" id='aboutInput' placeholder='About' onChange={(e)=> {setAboutValue(e.target.value)}}/>
                    </div>
                    <div className="contentSection">
                        {/* <textarea name="" id="" placeholder='Content' onChange={(e)=> {setContentValue(e.target.value)}}></textarea> */}
                        <TextEditor contentValue={contentValue} updateFn={fnSetContentValue} isEditable={true} initalContent={''}/>
                    </div>
                    <div className="formControls">
                        <p className='errorMessage displayOff incomplete' ref={errorElement}>{error}</p>
                        <button type='submit' className={`${canClickButton}`} id='formSubmitButton' disabled={!canClickButton}>{submitButtonContent}</button>
                    </div>
                </form>
            </div>
        </S.CreatePostContainer>
    );
}

export default CreatePost;