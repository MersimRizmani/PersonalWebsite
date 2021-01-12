import logo from './logo.svg';
import Background from './components/background/Background'
import './App.css';

function App() {
  return (
    <div>
      <div className="scale-in-center" id="welcome">
        <img src={'pfp.png'} 
        alt="mersim rizmani" />
      </div>
      <Background/>
    </div>
  );
}

export default App;
