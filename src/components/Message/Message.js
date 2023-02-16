import './Message.css';

const Message = (props)=>{
    return (

            <p className = 'message__message'>Hola {props.name}</p>
       
    )
}

export default Message;