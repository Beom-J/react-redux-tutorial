import { connect } from 'react-redux';
import Todos from '../../components/todos';
import { changeInput, insert, toggle, remove } from '../../modules/todos';

const TodosContainer = ({
  input, // input text
  todos, // Object of todo list
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(
  // state param : 현재 스토어가 가지고 있는 state
  // 비구조화 할당 -> todos 분리 -> state.todos.input 대신 todos.input 사용
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
