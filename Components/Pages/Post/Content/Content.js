import * as S from './Content.styled'

const Content = () => {
    const data = {
        imageURL: '/landing10.jpg',
        title: 'The Crisis in Cosmology.', 
        userName: 'Anonymous', 
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quam!',
        postID: '205'
    }
    return (
        <S.ContentContainer className='center'>
            <div className="inner content">
                <div className="meta">
                    <h1>{data.title}</h1>
                    <span>by {data.userName}</span>
                </div>
                <div className="image" style={{backgroundImage: `url('${data.imageURL}')`}}></div>
                <div className="text">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error earum, voluptatem amet debitis veniam aperiam esse et atque impedit laudantium, quia consequatur consequuntur dolor illum laborum magni reiciendis perspiciatis temporibus vero aliquam odio repudiandae necessitatibus omnis quidem! Mollitia nobis eligendi, alias ullam eius quia et velit, adipisci sed nostrum, ab natus doloribus dolorem accusamus. Tempora quam neque ducimus expedita magni voluptates accusamus culpa iste, minima atque voluptatem esse porro repellat itaque sequi possimus quibusdam maiores omnis magnam illum rem provident quos ipsa. Quam, non dolor dolorem, nam eum fugiat fugit temporibus et dolores earum repudiandae deserunt, suscipit impedit. Placeat, est.
                    </p>
                </div>
            </div>
        </S.ContentContainer>
    );
}

export default Content;