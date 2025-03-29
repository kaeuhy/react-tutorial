export default function EventKey() {
    const handlekey = e => {
        if (e.ctrlKey && e.key === 'q') {
            alert('이름은 20자 이내로 입력해 주세요.');
        }
    };

    return (
        <form>
            <lable>
                이름:
                <input type="text" size="20" onKeyDown={handlekey} />
            </lable>
        </form>
    );
}