const Todo = (props) => {
    return (
        <>
            <li>
                { props.todo }
                <button onClick={() => props.removeTodo(props.todo)}>remove</button> 
            </li>
        </>
    );
};

export default Todo;