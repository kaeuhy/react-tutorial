import css, { globalCss, resolveCss } from "./StyledCss.css.jsx";

export default function StyledCss() {
    return (
        <>
        <style jsx>{css}</style>
            <style jsx>{globalCss}</style>
            {resolveCss.styles}
            <div className={`panel ${resolveCss.className}`}><b>Styled JSX</b>는 ...
            </div>
        </>
    );
}