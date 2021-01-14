import Background from './components/background/Background';
import Header from './components/header/Header';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';

export default function App() {
  return (
    <div className="full-height">
      <Header/>
      <div className="scale-in-center" id="welcome">
        <img src={'pfp.png'} alt="mersim rizmani" />
        <ReactTypingEffect className="typingeffect" id="name" text={["Hi, I'm Mersim Rizmani.", "I'm a Software Engineer."]} speed={75} eraseDelay={250}/>
      </div>
      <Background/>
    </div>
  );
}
