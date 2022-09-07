// export default function DiaryItem({ diaryInfo }) {
//   return (
//     <li className="diaryItem">
//       <div className="info">
//         <dl>
//           <dt>글쓴이</dt>
//           <dd>{diaryInfo.writer}</dd>
//         </dl>
//         <dl>
//           <dt>오늘의 기분</dt>
//           <dd>{diaryInfo.emotion}</dd>
//         </dl>
//         <dl>
//           <dt>날짜</dt>
//           <dd>{new Date(diaryInfo.date).toLocaleString()}</dd>
//         </dl>
//         <div className="btns">
//           <button>done</button>
//           <button>close</button>
//         </div>
//       </div>
//       <div className="contents">{diaryInfo.contents}</div>
//     </li>
//   );
// }

import { useState } from "react";

export default function DiaryItem({ writer, id, emotion, contents, date }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li className="diaryItem">
      <div className="info">
        <dl>
          <dt>글쓴이</dt>
          <dd>{writer}</dd>
        </dl>
        <dl>
          <dt>오늘의 기분</dt>
          <dd>{emotion}</dd>
        </dl>
        <dl>
          <dt>날짜</dt>
          <dd>{new Date(date).toLocaleString()}</dd>
        </dl>
        <div className="btns">
          {isEdit ? (
            <>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">done</span>
              </button>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </>
          ) : (
            <>
              <button
                className="btn"
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                <span className="material-icons">edit</span>
              </button>
              <button className="btn">
                delete
                <span className="material-icons">delete</span>
              </button>
            </>
          )}
        </div>
      </div>
      {isEdit ? (
        <>
          <textarea name="" id="" cols="30" rows="10" value={contents}></textarea>
        </>
      ) : (
        <div className="contents">{contents}</div>
      )}
    </li>
  );
}
