import Background from './components/background/Background';
import Header from './components/header/Header';
import './App.css';

export default function App() {
  return (
    <div>
      <Header/>
      <div className="scale-in-center" id="welcome">
        <img src={'pfp.png'} alt="mersim rizmani" />
        <p id="name"> Hi, I'm Mersim Rizmani </p>
      </div>
      <Background/>
    </div>
  );
}
