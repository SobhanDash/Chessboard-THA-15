import "./styles.css";

function Cell() {
  return <div className="cell"></div>;
}

export default function App() {
  return (
    <div className="App">
      <div className="main">
        {[...Array(64)].map(() => {
          return <Cell />;
        })}
      </div>
    </div>
  );
}

// function Cell({ i, alter }) {
//   // console.log(i, alter);

//   if (alter) {
//     return (
//       <div
//         className="cell"
//         style={{ background: i % 2 === 0 ? "black" : "white" }}
//       ></div>
//     );
//   } else {
//     return (
//       <div
//         className="cell"
//         style={{ background: i % 2 === 0 ? "white" : "black" }}
//       ></div>
//     );
//   }
// }

//export default function App() {
//   let alter = false;
//   return (
//     <div className="App">
//       <div className="main">
//         {[...Array(64)].map((cell, i) => {
//           // console.log(i%8)
//           if (i % 8 === 0 && i !== 0) {
//             alter = !alter;
//           }
//           return <Cell i={i} alter={alter} />;
//         })}
//       </div>
//     </div>
//   );
// }
