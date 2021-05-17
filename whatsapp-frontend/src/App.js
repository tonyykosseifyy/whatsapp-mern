import './App.css';
import Sidebar from './Components/Sidebar' ;
import Chat from './Components/Chat' ;


function App() {
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
