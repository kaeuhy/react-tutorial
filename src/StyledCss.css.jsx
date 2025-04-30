import css from 'styled-jsx/css';

export default css`...`;

export const globalCss = css.global`
h3 {
    background-color: Yellow;
    }
    `;

export const resolveCss = css.resolve`
.panel {
margin: 50px;
}`;