import React , { useEffect , useState } from 'react' ;
import './App.css';
import Sidebar from './Components/Sidebar' ;
import Chat from './Components/Chat' ;
import Pusher from 'pusher-js' ;
import axios from './axios' ;

function App() {
    const [ messages , setMessages ] = useState([]) ;
    useEffect(() => {
      axios.get("/messages/sync")
        .then(response => setMessages(response))
    }, [])

  useEffect(() => {
    const pusher = new Pusher('78807f61266ecf786efd', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
    setMessages([...messages , data])
    });
  },[messages])
  console.log(messages) ;
  return (
    <div className="app">
      <div className='app-body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
