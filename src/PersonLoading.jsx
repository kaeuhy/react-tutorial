import { Suspense, lazy } from 'react';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const LazyPerson = lazy(()=> import('./LazyPerson.jsx'));


export default function LazyLoading() {
    return (
            <LazyPerson />
    );
}