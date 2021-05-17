import React from 'react' ;
import './Chat.css' ;
import Avatar from '@material-ui/core/Avatar' ;
import IconButton from '@material-ui/core/IconButton' ;
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined' ;
import AttachFileIcon from '@material-ui/icons/AttachFile' ;
import MoreVertIcon from '@material-ui/icons/MoreVert' ;
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon' ;
import MicIcon from '@material-ui/icons/Mic' ;

const Chat = () => {
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
        <p className='chat-message'>
          <span className='chat-name'>Sonny</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat-message chat-receiver'>
          <span className='chat-name'>Sonny</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat-message'>
          <span className='chat-name'>Sonny</span>
          This is a message
          <span className='chat-timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className='chat-footer'>
        <InsertEmotionIcon />
        <form>
          <input placeholder='Type a message' type='text' />
          <button type='submit'>Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
} ;



export default Chat ;
