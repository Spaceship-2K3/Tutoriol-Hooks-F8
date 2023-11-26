import { useStore, actions } from "./index";
import { useContext } from "react";
function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const handleAdd = () => {
        dispatch(actions.addTodoInput(todoInput));
    };

    return (
        <div style={{ padding: 30 }}>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={(e) => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />

            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo, index) => {
                    return <li key={index}>{todo}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
