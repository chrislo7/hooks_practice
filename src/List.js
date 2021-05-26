import { useState } from 'react';
import Todo from './Todo'


const List = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setTodos([...todos, todo]);
        setTodo('');
    };

    const onChange = (value) => {
        setTodo(value);
    };

    const removeTodo = (todo) => {
        setTodos(todos.filter((e) => e !== todo));
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={e => onChange(e.target.value)}></input>
                <button type="submit">Submit</button>
            </form>
            <ul>
            {
                todos.map((todo, i) => {
                    return <Todo key={i} todo={todo} removeTodo={removeTodo} />
                })
            }
            </ul>
        </div>
    );
};


// Todo Component
// <li key={i}>{todo} <button onClick={() => removeTodo(todo)}>remove</button> </li>

export default List;