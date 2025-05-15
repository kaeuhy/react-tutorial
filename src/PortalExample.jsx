import { useState } from "react";
import { createPortal } from "react-dom";
import './PortalBasic.css';
import ModalContent from "./ModalContent.jsx";

export default function PortalExample() {
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
                포탈을 사용중인 모달 보여주기
            </button>
            {show && createPortal(
                    <ModalContent onClose={handleClose} />,
                document.getElementById('dialog')
            )}
        </form>
    );
}
