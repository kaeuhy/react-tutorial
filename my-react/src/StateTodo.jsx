import { useState } from 'react';
import './StateTodo.css';

let maxId = 0;
const initialState = [
  {id: 0, title: "React.js"},
  {id: 1, title: "Next.js"}
]

export default function StateTodo() {
  const [desc, setDesc] = useState(true);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState(initialState);


  const handleChangeTitle = e => {
    setTitle(e.target.value);
  };

  const handleClick = () => {

    setTodo([
      ...todo.slice(0,1),
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false
      },
      ...todo.slice(1)
    ]);
  };

  const handleDone = e => {
    setTodo(todo.map(item => {
      if (item.id === Number(e.target.dataset.id)) {
        return {
          ...item,
          isDone: true
        };
      } else {
        return item;
      }
    }));
  };

  const handleRemove = e => {
    setTodo(todo.filter(item =>
      item.id !== Number(e.target.dataset.id)
    ));
  };

  const handleSort = e => {
    const sorted = [...todo];
    sorted.sort((m, n) => {
      if (desc) {
        return n.created.getTime() - m.created.getTime();
      } else {
        return m.created.getTime() - n.created.getTime();
      }
    });
    setDesc(d => !d);
    setTodo(sorted);
  };

  const handleRecover = e => {

  }

  return (
    <div>
      <label>
        해야 할 일:
        <input type="text" name="title"
          value={title} onChange={handleChangeTitle} />
      </label>
      <button type="button"
        onClick={handleClick}>추가하기</button>
      {/* desc 값에 따라 캡션 변경 */}
      <button type="button"
        onClick={handleSort}>
         정렬({desc ? '↑' : '↓'})</button>
      <hr />

      {/* 할 일을 목록으로 정리하기 */}
      <ul>
        {todo.map(item => (
          <li key={item.id}
            className={item.isDone ? 'done' : ''}>
            {item.title}
            <button type="button"
              onClick={handleDone} data-id={item.id}>완료
            </button>
            <button type="button"
                    onClick={handleRecover} data-id={item.id}>복구
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