import "./App.css";
import "./css/layout.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DiaryEditor from "./components/DiaryEditor";

function App() {
  const insertDiary = function (writer, contents, emotion) {
    console.log("writer===", writer);
    console.log("contents===", contents);
    console.log("emotion===", emotion);
  };
  return (
    <div className="App">
      <Header />
      <DiaryEditor insertDiary={insertDiary} />
      <Footer />
    </div>
  );
}

export default App;

