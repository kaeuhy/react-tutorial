import { useLocation } from 'react-router-dom';

export default function BookStatePage() {
    // Location 객체 가져오기
    const { state: isbn = '979-1-1583-9517-9' } = useLocation();

    return (
        <>
            <p>ISBN 코드 {isbn}의 페이지입니다.</p>
        </>
    );
}