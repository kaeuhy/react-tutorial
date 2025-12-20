export default function Button({ children, text, color = "black" }) {
  const onClickButton = (e) => {
    // 이벤트 객체 e
    console.log(e);
    console.log(text, color);
  };

  return (
    <button
      // 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}
