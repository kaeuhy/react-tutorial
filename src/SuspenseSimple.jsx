import { Suspense } from 'react';
import ThrowPromise from './ThrowPromise.jsx';

export default function SuspenseSimple() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <ThrowPromise />
            </Suspense>
    );
}