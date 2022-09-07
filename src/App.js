import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import { useRef, useState } from "react";

function App() {
  const dataId = useRef(0);
  // useRef는 화면이 렌더링 되어서 값이 초기화 되는걸 막고 싶을때 또는 Dom제어할때....
  let count = 0;
  const deleteDiary = function (id) {
    console.log("id===", id);
    //여기서 전달 받은 id값만 지우고
    const filteredDiaryData = diaryData.filter((item, idx) => {
      return item.id !== id;
    });
    setDiaryData(filteredDiaryData);
  };

  const modifyDiary = function (id, localContents) {
    console.log(localContents);
  };

  const insertDiary = function (writer, contents, emotion) {
    console.log("writer===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
    const inserDiaryData = {
      writer: writer,
      contents: contents,
      emotion: emotion,
      date: new Date().getTime(),
      id: dataId.current,
    };
    dataId.current += 1;
    count += 1;
    console.log(dataId.current);
    setDiaryData([inserDiaryData, ...diaryData]);
  };
  const [diaryData, setDiaryData] = useState([
    { id: 1, writer: "장성호", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 1, date: 1662512885838 },
    { id: 2, writer: "장동건", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 166551285838 },
    { id: 3, writer: "현빈", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 3, date: 1662812815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
  ]);
  /*
  const diaryData = [
    { id: 1, writer: "장성호", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 1, date: 1662512885838 },
    { id: 2, writer: "장동건", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 166551285838 },
    { id: 3, writer: "현빈", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 3, date: 1662812815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
  ];
*/
  return (
    <div className="App">
      <Header />
      <DiaryEditor insertDiary={insertDiary} />
      <DiaryList diaryList={diaryData} deleteDiary={deleteDiary} modifyDiary={modifyDiary} />
      <Footer />
    </div>
  );
}

export default App;

