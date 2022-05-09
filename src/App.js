import Counter from './components/counter';
import Todos from './components/todos';

function App() {
  return (
    <div className="App">
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
