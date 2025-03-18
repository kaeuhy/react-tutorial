// React 라이브러리 가져오기
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 전역 스타일 가져오기
import './index.css'
// 앱별 코드가져오기
import App from './App.jsx'

// 리액트 앱 렌더링
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

