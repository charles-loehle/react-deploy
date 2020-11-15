import logo from './logo.svg';
import './App.css';
import profileImage from './img/me.jpg';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Charles Loehle</h2>
      <img src={profileImage} alt="" />
    </div>
  );
}

export default App;
