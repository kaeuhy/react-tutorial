import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { idsAtom, todoListSelector } from './store/atomUp.jsx';
import './StateTodo.css';

export default function RecoilTodoUp() {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useRecoilState(todoListSelector);
    const [ids, setIds] = useRecoilState(idsAtom);

    const handleChangeTitle = e => {setTitle(e.target.value)};

    const handleAdd = () => {
        const newId = Math.max(...(ids.length ? ids : [0])) + 1;
        setTodo({
            type: 'add',
            newItem: {
                id: newId,
                title,
                isDone: false
            }
        });
    };

    const handleDone = e => {
        setTodo({
            type: 'done',
            id: Number(e.target.dataset.id)
        });
    };

    const handleRemove = e => {
        setTodo({
            type: 'remove',
            id: Number(e.target.dataset.id)
        });
    };

    return (
        <div>
            <label>
                할 일:
                <input type="text" name="todo"
                       value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button"
                    onClick={handleAdd}>추가</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}
                        className={item.isDone ? 'done' : ''}>
                        {item.title}
                        <button type="button"
                                onClick={handleDone} data-id={item.id}>완료
                        </button>
                        <button type="button"
                                onClick={handleRemove} data-id={item.id}>삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}