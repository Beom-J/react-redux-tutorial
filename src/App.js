import CounterContainer from './containers/counterContainer';
import TodosContainer from './containers/todosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
