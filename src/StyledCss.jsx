import css from './StyledCss.css.jsx';

export default function StyledCss() {
    return (
        <>
        <style jsx>{css}</style>
            <div className="panel"><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를...
            </div>
        </>
    );
}