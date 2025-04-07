import { useState } from 'react';
import './StateTodo.css';

let maxId = 0;
export default function StateTodo() {
    const[title, setTitle] = useState('');
    const[todo, setTodo] = useState([]);
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleDone = e => {
        setTodo(todo.map(item => {
            if(item.id === Number(e.currentTarget.id)) {
                return {
                    ...item,
                    isDone: true
                };
            } else {
                return item;
            }
        }));
    };


    return (
        <div>
            <label>
                <input type="text" name="title"
                       value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button"
                    onClick={handleClick}>추가하기</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                    className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button"
                                onClick={handleDone} data-id={item.id}>완료
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}