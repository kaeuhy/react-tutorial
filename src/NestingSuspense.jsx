import {lazy, Suspense} from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const NowLoading = lazy(() => sleep(0).then(() => import('./NowLoading.jsx')));
const PersonLoading = lazy(() => sleep(2000).then(() => import('./PersonLoading.jsx')));


export default function NestingSuspense() {
    return (
        <Suspense fallback={<p>로딩 중...</p>}>
        <NowLoading />
            <Suspense>
            <PersonLoading />
        </Suspense>
        </Suspense>
    );
}