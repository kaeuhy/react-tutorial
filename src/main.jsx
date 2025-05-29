import {createRoot} from 'react-dom/client'
import './global.css'
import RecoilCounter from "./RecoilCounter.jsx";
import {RecoilRoot} from "recoil";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <RecoilRoot>
                <RecoilCounter />
            </RecoilRoot>
        </div>
    </>
);