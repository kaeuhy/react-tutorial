import { useState } from 'react';

export default function FormCheck() {
    const [form, setForm] = useState({
        agreement: true
    });

    const handleFormCheck = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    };

    const show = () => {
        console.log(`동의 확인: ${form.agreement ? '동의': '동의하지 않음'}`);
    };

    return (
        <form>
            <label htmlFor="agreement">동의합니다:</label>
            <input id="agreement" name="agreement" type="checkbox"
                   checked={form.agreement}
                   onChange={handleFormCheck} /><br />
            <button type="button" onClick={show}>보내기</button>
        </form>
    );
}