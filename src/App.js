import logo from './logo.png';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <img src={logo} width={150} height={150} alt="Dogecoin Logo" />
      <h1 className="title">Live Dogecoin Price</h1>
      <h5 className="subtitle">Dogecoin To The Moon 🚀🌕</h5>
    </div>
  );
};

export default App;
