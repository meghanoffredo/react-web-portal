import React from 'react';

export default function ToDo( {todo, toggleToDo} ) {
    function handleToDoClick() {
        toggleToDo(todo.id)
    }

    return (
        <div>
            <label
                className="form-control">
                <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={handleToDoClick}
                    className="checkbox" />
                    {todo.name}
            </label>
        </div>
    )
}