let flag = false;

export default function THrowPromise() {
    if (flag) {
        return <p>올바르게 표시되었다.</p>;
    }
    throw new Promise((resolve, reject) => {
        setTimeout(() => {
            flag = true;
            resolve('Susccess!!');
        }, 3000);
    });
}