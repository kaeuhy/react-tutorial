import React, { useState, useEffect } from 'react';

export default function NetworkHook() {
    const [state, setOnline] = useState(true);

    useEffect(() => {
        const online = () => {
            setState(true);
        };

        const offline = () => {
            setState(false);
        };

        window.addEventListener('online', online);
        window.addEventListener('offline', offline);

        return () => {
            window.removeEventListener('online', online);
            window.removeEventListener('offline', offline);
        };
    }, []);

    return (
        <div>
            <p>현재 상태 : {state ? '온라인' : '오프라인'}</p>
        </div>
    );
};