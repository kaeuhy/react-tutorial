// import { useState } from "react";
//
// export default function EventBasic({ type }) {
//     const [time, setTime] = useState(""); // 화면에 표시할 시간 상태
//
//     function handleClick() {
//         const d = new Date(); // 버튼을 누를 때마다 새로운 시간 생성
//
//         let result = "";
//         switch (type) {
//             case "date":
//                 result = d.toLocaleDateString();
//                 break;
//             case "time":
//                 result = d.toLocaleTimeString();
//                 break;
//             default:
//                 result = d.toLocaleString();
//                 break;
//         }
//
//         setTime(result); // 화면에 시간 표시
//         console.log(result); // 콘솔에도 출력
//     }
//
//     return (
//         <div>
//             <button onClick={handleClick}>현재 시각 가져오기</button>
//             <p>{time}</p> {/* 현재 시간 표시 */}
//         </div>
//     );
// }
