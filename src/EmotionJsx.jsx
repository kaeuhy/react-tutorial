/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export default function EmotionJsx() {
    const styles = css`
        width: 300px;
        padding: 10px;
        border: 1px solid #000;
        border-radius: 5px;
        background-color: royalblue;
        color: white;
    `;

    return (
        <div css={styles}><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를...</div>
    );
}