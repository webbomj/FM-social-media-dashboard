import './App.css';
import Header from './components/Header';
import MainMedia from './components/MainMedia';
import StatisticsList from './components/StatisticsList';
import {data, overwiew} from './data.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainMedia data={data}/>
      <StatisticsList data={overwiew}/>
    </div>
  );
}

export default App;
