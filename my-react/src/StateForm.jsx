import { useState } from 'react';

export default function StateForm() {
    const [state, setState] = useState({
        name: '홍길동',
        age: 18
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`안녕하세요, ${form.name} (${form.age}세) 님 !`);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">이름: </label>
                <input id="name" name="name" type="text"
                onChange={handleForm} value={form.name}/>
            </div>
            <div>
                <label htmlFor="age">나이:</label>
                <input id="age" name="age" type="number"
                       onChange={handleForm} value={form.age}/>
            </div>
            <div>
                <button type="button" onClick={show}>
                    보내기
                </button>
            </div>
            <p>안녕하세요, {form.name} ({form.age}세) 님 !</p>
        </form>
    );
}