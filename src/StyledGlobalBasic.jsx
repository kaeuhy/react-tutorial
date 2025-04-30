export default function StyledGlobalBasic() {
    return (
        <>
            {/* Styled JSX로 스타일 정의 */}
            <style jsx global>{`
            h3 {
                background-color: Yellow;
            }
            `}</style>
            <style jsx>{`
                .panel {
                    width: 300px;
                    padding: 10px;
                    border: 1px solid #000;
                    border-radius: 5px;
                    background-color: royalblue;
                    color: white;
                }
            `}</style>
            <div className="panel"><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를...
            </div>
            <h3>전역 스타일 적용된 제목입니다</h3>
        </>
    );
}