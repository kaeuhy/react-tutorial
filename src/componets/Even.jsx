import { useEffect } from "react";

export default function Even() {

  // unmount
  useEffect(() => {
    return () => {
      console.log("unmount");
    }
  }, []);
  return (
    <div>
      짝수입니다.
    </div>
  )
}