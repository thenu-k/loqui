import { useRef, useState } from 'react';
import * as S from './CreatePost.styled'
import {collection, addDoc} from 'firebase/firestore'
import {db} from '../../../firebase/firebase'

const CreatePost = () => {
    const errorElement = useRef()
    const [titleValue, setTitleValue] = useState(null)
    const [imageURLValue, setImageURLValue] = useState(null)
    const [usernameValue, setUsernameValue] = useState(null)
    const [contentValue, setContentValue] = useState(null)
    const [aboutValue, setAboutValue] = useState(null)
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const values = [titleValue, imageURLValue, usernameValue, contentValue, aboutValue]
        console.log(values)
        const nullTest = values.includes(null) || values.includes('') 
        //First checking whether null
        if(nullTest===true){
            console.log('Null')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        //Then checking rest (or null errors will occur here)
        const aboutTest = values[4].length>=5 
        const usernameTest = values[0].length>=5
        const titleTest = values[0].length>=5
        const contentTest = values[3].length>=5
        if(aboutTest===true){
            console.log('About')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(usernameTest===true){
            console.log('Username')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(titleTest===true){
            console.log('Title')
            if(errorElement.current.classList.contains('displayOff')===true){
                errorElement.current.classList.remove('displayOff')
            }
            return
        }
        if(contentTest===true){
            console.log('Content')
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
        const transferPackage = {
            title: values[0], imageURL: values[1], userName: values[2], text: values[3], about: values[4]
        }
        const dbRef = collection(db, "postData");
        await addDoc(dbRef, transferPackage)
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
                        <input type="text" id='imageInput' placeholder='Image URL' onChange={(e)=> {setImageURLValue(e.target.value)}}/>
                    </div>
                    <div className="usernameSection inpElement com1">
                        {/* <label htmlFor="usernameInput">Title</label> */}
                        <input type="text" id='usernameInput' placeholder='Username' onChange={(e)=> {setUsernameValue(e.target.value)}}/>
                    </div>
                    <div className="aboutSection inpElement com1">
                        {/* <label htmlFor="usernameInput">Title</label> */}
                        <input type="text" id='aboutInput' placeholder='About' onChange={(e)=> {setAboutValue(e.target.value)}}/>
                    </div>
                    <div className="textSection">
                        <textarea name="" id="" placeholder='Content' onChange={(e)=> {setContentValue(e.target.value)}}></textarea>
                    </div>
                    <div className="formControls">
                        <p className='errorMessage displayOff incomplete' ref={errorElement}>ERROR</p>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </S.CreatePostContainer>
    );
}

export default CreatePost;