import './App.css';
import Player from './Component/CricketPlayer/Player';
import Header from './Component/Header/Header';
import Questions from './Component/Questions/Questions';


function App() {
  return (
    <div className="cricket-league">
      <Header></Header>
      <Player></Player>
      <Questions></Questions>
    </div>
   
  );
}

export default App;
