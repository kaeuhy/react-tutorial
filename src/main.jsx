import {createRoot} from 'react-dom/client'
import './global.css'
import RecoilCounter from "./RecoilCounter.jsx";
import {RecoilRoot} from "recoil";
import RecoilTodo from "./RecoilTodo.jsx";
import RecoilTodoUp from "./RecoilTodoUp.jsx";

createRoot(document.getElementById('root')).render(
    <>
        <div className="centered">
            <RecoilRoot>
                <RecoilTodoUp />
            </RecoilRoot>
        </div>
    </>
);