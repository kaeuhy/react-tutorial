import { isRouteErrorResponse, json,
    useLoaderData, useRouteError } from 'react-router-dom';

const sleep = ms => new Promise(res => setTimeout(res, ms));

export async function loader({ params }) {
    await sleep(2000);
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=kr&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
    if (res.ok) { return res; }
    switch (res.status) {
        case 404:
            throw json({ message: 'city is invalid!!' }, { status: 404 });
        case 401:
            throw json({ message: 'api key is invalid!!' }, { status: 401 });
        default:
            throw json({ message: 'unknown error...' }, { status: 503 });
    }
};

export function Component() {
    const data =  useLoaderData();
    return (
        <figure>
            <img src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
                 alt={data?.weather?.[0]?.main} />
            <figcaption>{data?.weather?.[0]?.description}</figcaption>
        </figure>
    );
}
Component.displayName = 'WeatherLazyPage';

export function ErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <p>원하는 페이지를 찾을 수 없습니다.</p>;
            case 401:
                return <p>인증에 실패했습니다.</p>;
            case 501:
                return <p>서비스가 일시적으로 중단되었습니다.</p>;
            default:
                return <p>알 수 없는 오류: {error.data.message}</p>;
        }
    }
    return (
        <div>
            <h3>문제가 발생했습니다.</h3>
            <p>상세한 문제: {error.message}</p>
        </div>
    );
}
ErrorBoundary.displayName = 'WeatherLazyErrorPage';