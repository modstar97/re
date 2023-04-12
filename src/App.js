import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    function handleNewTodoTextChange(event) {
        setNewTodoText(event.target.value);
    }

    function handleAddTodo() {
        if (newTodoText !== '') {
            setTodos([...todos, { text: newTodoText, completed: false }]);
            setNewTodoText('');
        }
    }

    function handleDeleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function handleCompleteToggle(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return ( <
        div className = "TodoList" >
        <
        h1 > To - Do List < /h1> <
        ul > {
            todos.map((todo, index) => ( <
                li key = { index } >
                <
                label className = { todo.completed ? 'completed' : null } >
                <
                input type = "checkbox"
                checked = { todo.completed }
                onChange = {
                    () => handleCompleteToggle(index) }
                /> { todo.text } <
                /label> <
                button onClick = {
                    () => handleDeleteTodo(index) } > Delete < /button> <
                /li>
            ))
        } <
        /ul> <
        input type = "text"
        value = { newTodoText }
        onChange = { handleNewTodoTextChange }
        /> <
        button onClick = { handleAddTodo } > Add < /button> <
        /div>
    );
}

export default TodoList;