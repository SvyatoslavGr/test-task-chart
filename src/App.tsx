import './App.css';
import Chart from './components/Chart/Chart';
import { array1, array2 } from './data/arrays';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Vertical bar charts
        </h1>
      </header>
      <main className='container'>
        <h2>Chart 1</h2>
        <Chart array={array1}/>
        <h2>Chart 2</h2>
        <Chart array={array2}/>
      </main>
    </div>
  );
}

export default App;
