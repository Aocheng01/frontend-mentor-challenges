import avatar from "../assets/images/image-avatar.webp"

export default function Contact(){
    return(
        <div className="contact">
            <div className="avatar"> <img src={avatar} alt="Avatar"/></div>
            <div className="name">Greg Hopper</div>     
        </div>
    )
}