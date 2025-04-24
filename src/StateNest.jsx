import { useState } from 'react';

export default function StateNest() {
    const [form, setForm] = useState({
        name: '홍길동',
        address: {
            city: '태안',
            do: '충청남도'
        }
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFormNest = e => {
        setForm({
            ...form,
            address: {
                ...form.address,
                [e.target.name]: e.target.value
            }
        });
    };

    const show = () => {
        console.log(`${form.name}（${form.address.do}・${form.address.city}）`);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">이름:</label>
                <input id="name" name="name" type="text"
                       onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="do">주소(도):</label>
                <input id="do" name="do" type="text"
                       onChange={handleFormNest} value={form.address.do} />
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구):</label>
                <input id="city" name="city" type="text"
                       onChange={handleFormNest} value={form.address.city} />
            </div>
            <div>
                <button type="button" onClick={show}>
                    보내기</button>
            </div>
        </form>
    );
}