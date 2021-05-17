import React, { useState , useEffect } from 'react' ;
import './SidebarChat.css' ;
import Avatar from '@material-ui/core/Avatar' ;

const SidebarChat = () => {
  const [ animation , setAnimation ] = useState(null) ;
  return (
    <div className='sidebar-chat' onClick={() => setAnimation(!animation)}>
      <div className='sidebar-ripple' style={{animationName: animation ? 'rippleAnimation' : animation===false ? 'rippleAnimationn': '' }}></div>
      <Avatar />
      <div className='sidebar-chat-info'>
        <h2>Room Name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  )
} ;


export default SidebarChat ;
