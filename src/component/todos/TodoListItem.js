import React from 'react';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';

const color = red[500];

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted
                ? null
                : <Button
                    onClick={() => onCompletedPressed(todo.text)}
                    variant="contained" color="primary">Mark As Completed</Button>}
            <Button
                onClick={() => onRemovePressed(todo.text)}
                variant="contained" sx={{ backgroundColor: color, color: 'white' }}>Remove</Button>
        </div>
    </div>
);

export default TodoListItem;