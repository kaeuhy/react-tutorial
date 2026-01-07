import Header from "../components/Header/Header.jsx";
import Button from "../components/Button/Button.jsx";
import DiaryList from "../components/Diary/DiaryList.jsx";
import { useState, useContext } from "react";
import { DiaryStateContext } from "../App.jsx";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    // date를 0으로 두면 getMonth로 가져온 달 + 1 달 전달 즉 현재 달의 마지막날을 가리킴
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

export default function Home() {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1)
    );
  };

  const onDecreaseMonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1)
    );
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text="<" />}
        rightChild={<Button onClick={onIncreaseMonth} text=">" />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}