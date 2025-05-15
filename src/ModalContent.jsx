export default function ModalContent({onClose}) {
    return (
        <div>
            <p>모달 다이얼로그</p>
            <button type="button" onClick={onClose}>
                닫기
            </button>
        </div>
    )
}