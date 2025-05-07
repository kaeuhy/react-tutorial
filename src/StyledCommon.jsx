import styled from 'styled-components';
import PanelBase from './StyledCommon.css';

const MyPanel = styled.div`
    ${PanelBase}
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: royalblue;
    color: white;
`;

export default function StyledCommon() {
    return (
        <MyPanel><b>Styled JSX</b>는 JSX 표현식에 스타일 정의를 삽입하는 형식의 라이브러리입니다.</MyPanel>
    );
}