
import './App.css';
import Button from './components/Button/Button';
import Message from './components/Message/Message';
import Phones from './components/Phones';

function App() {
  const users = [
    'Laura',
    'Edu'
  ];
  const daleMyFriend = ()=>{
    alert('Le has dado')
  }

  const posOk = ()=>{
    alert('Pues ok tio…')
  }

  return (
    <div className="App">
      <Phones/>
      <div className="phones">
        <h2 className = 'message__title'>Mensajes</h2>
        <Message name = {users[0]}/>
        <Message name = {users[1]}/>
      </div>
      <div className="phones">
        <h2 className = 'message__title'>Botones</h2>
        <Button text = 'Dale!' handleClick = {daleMyFriend}/>
        <Button text = 'Ok'  handleClick = {posOk}/>
      </div>
    </div>
  );
}

export default App;
