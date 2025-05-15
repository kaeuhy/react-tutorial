import './PortalBasic.css';
import {useState} from "react";
import ModalContent from "./ModalContent.jsx";
import {createPortal} from "react-dom";

export default function NoPortalExample() {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

    return (
        <form>
            <button type="button" onClick={handleClick}
                    disabled={show}>
                포탈 사용하지 않고 나타내기
            </button>
            {show && <ModalContent onClose={handleClose}/>}
        </form>
    );
}