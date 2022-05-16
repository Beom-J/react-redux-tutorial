import Todos from './components/todos';
import CounterContainer from './containers/counterContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
}

export default App;
