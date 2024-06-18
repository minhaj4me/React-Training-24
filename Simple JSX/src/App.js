import logo from './logo.svg';
import './App.css';

function App() {
  let college = 'GNIOT'
  return (
    <div className="App">
      <h1>Minhaj Haider</h1>
      <h2>{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</h2>
      <h3>{college}, {2 * 6}</h3>
    </div>
  );
}

export default App;
