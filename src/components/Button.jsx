export default function Button({ children, text, color = "black" }) {
  console.log(text);

  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}
