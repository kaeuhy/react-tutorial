import { createContext } from 'react';
import { HookContextChild } from './HookContextChild.jsx';

export const MyAppContext = createContext();
const config = {
    title: 'React 입문',
    lang: 'ko-KR',
};

export default function HookContext() {
    return (
        <MyAppContext.Provider value={config}>
            <div id="c_main">
                <HookContextChild />
            </div>
        </MyAppContext.Provider>
    );
}