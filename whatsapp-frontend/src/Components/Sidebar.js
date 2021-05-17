import React from 'react';
import './Sidebar.css' ;
import ChatIcon from '@material-ui/icons/Chat' ;
import MoreVertIcon from '@material-ui/icons/MoreVert' ;
import DonuLargeIcon from '@material-ui/icons/DonutLarge' ;
import { Avatar , IconButton } from '@material-ui/core' ;
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined' ;
import SidebarChat from './SidebarChat' ;

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Avatar />
        <div className='sidebar-header-right'>
          <IconButton>
            <DonuLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className='sidebar-search'>
        <div className='sidebar-search-container'>
          <SearchOutlinedIcon />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>

      <div className='sidebar-chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
} ;


export default Sidebar ;
