import React, { useState } from 'react' ;
import './Chat.css' ;
import Avatar from '@material-ui/core/Avatar' ;
import IconButton from '@material-ui/core/IconButton' ;
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined' ;
import AttachFileIcon from '@material-ui/icons/AttachFile' ;
import MoreVertIcon from '@material-ui/icons/MoreVert' ;
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon' ;
import MicIcon from '@material-ui/icons/Mic' ;
import axios from 'axios' ;

const Chat = ({ messages }) => {
  const [ input , setInput ] = useState('') ;
  const sendMessage = e => {
    e.preventDefault() ;
    axios.post("http://localhost:9000/messages/new" , {
      message: input ,
      name: 'You',
      timestamp: `${new Date().getHours()}:${new Date().getMinutes()}` ,
      received: true
    })
    setInput('') ;
  }
  return (
    <div className='chat'>
      <div className='chat-header'>
        <Avatar />
        <div className='chat-header-info'>
            <h3>Room Name</h3>
            <p>Last seen at ...</p>
        </div>
        <div className='chat-header-right'>
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton>
              <AttachFileIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
        </div>
      </div>

      <div className='chat-body'>
        { messages.map((item , index) => (
          <p className={`chat-message ${item.received ? 'chat-receiver' : ''}`} key={index} >
            <span className='chat-name'>{item.name}</span>
            {item.message}
            <span className='chat-timestamp'>{item.timestamp}</span>
          </p>
        ))}

      </div>

      <div className='chat-footer'>
        <InsertEmotionIcon />
        <form>
          <input placeholder='Type a message' type='text' value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={(e) => sendMessage(e)} type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
} ;



export default Chat ;
