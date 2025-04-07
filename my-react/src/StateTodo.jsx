import { useState } from 'react';

let maxId = 0;
export default function StateTodo() {
    const[title, setTitle] = useState('');
    const[todo, setTodo] = useState([]);
    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleClick = () => {
        setTodo([
            ...todo,
            {
                id: ++maxId,
                title,
                created: new Date(),
                isDone: false
            }
        ]);
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
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}