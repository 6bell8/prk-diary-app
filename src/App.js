import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  console.log(new Date().getTime());
  const insertDiary = function (writer, contents, emotion) {
    console.log("writer===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
  };
  const dummy = [
    { id: 1, writer: "장성호", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 1, date: 1662512885838 },
    { id: 2, writer: "장동건", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 166551285838 },
    { id: 3, writer: "현빈", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 3, date: 1662812815838 },
    { id: 4, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662712815838 },
    { id: 5, writer: "지석진", contents: "날씨도 화창한데 집에서 듣는 나쁜 학생들....ㅋㅋㅋ", emotion: 2, date: 1662912815838 },
  ];

  return (
    <div className="App">
      <Header />
      <DiaryEditor insertDiary={insertDiary} />
      <DiaryList diaryList={dummy} />
      <Footer />
    </div>
  );
}

export default App;

