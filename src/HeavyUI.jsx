function sleep(delay) {
    let start = Data.now();
    while (Data.now() - start < delay);
}

export default function HeavyUI({ delay }) {
    sleep(delay);
    return <p>지연 시간은 {delay}밀리초</p>;
}