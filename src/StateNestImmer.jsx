import { useImmer } from 'use-immer';

export default function StateNestImmer() {
    const [form, setForm] = useImmer({
        name: '홍길동',
        address: {
            do: '충청남도',
            city: '태안'
        }
    });

    const handleForm = e => {
        setForm(form => {
            form[e.target.name] = e.target.value;
        });
    };

    const handleFormNest = e => {
        setForm(form => {
            form.address[e.target.name] = e.target.value;
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
