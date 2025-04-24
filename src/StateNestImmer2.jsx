import { useImmer } from 'use-immer';

export default function StateNestImmer2() {
    const [form, setForm] = useImmer({
        name: '홍길동',
        address: {
            city: '태안',
            do: '충청남도'
        }
    });

    const handleNest = e => {
        const ns = e.target.name.split('.');
        setForm(form => {
            if (ns.length === 1) {
                form[ns[0]] = e.target.value;
            } else {
                form[ns[0]][ns[1]] = e.target.value;
            }
        });
    };

    const show = () => {
        console.log(`${form.name}（${form.address.prefecture}・${form.address.city}）`);ㅇ
    };

    return (
        <form>
            <div>
                <label htmlFor="name">이름:</label>
                <input id="name" name="name" type="text"
                       onChange={handleNest} value={form.name} />
            </div>
            <div>
                <label htmlFor="do">주소(도):</label>
                <input id="do" name="address.do" type="text"
                       onChange={handleNest} value={form.address.do} />
            </div>
            <div>
                <label htmlFor="city">주소(시/군/구):</label>
                <input id="city" name="address.city" type="text"
                       onChange={handleNest} value={form.address.city} />
            </div>
            <div>
                <button type="button" onClick={show}>
                    보내기</button>
            </div>
        </form>
    );
}