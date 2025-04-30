import { Suspense, lazy } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyTitle = lazy(()=> import('./LazyTitle.jsx'));


export default function LazyLoading() {
    return (
        <LazyTitle />
    );
}