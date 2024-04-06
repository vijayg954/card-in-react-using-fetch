import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [cards, setcard] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  let fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let b = await a.json();
    setcard(b);
    console.log(b);
  };

  return (
    <>
      <div className="container">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card">
              <h1>{card.id}</h1>
              <h1>{card.title}</h1>

              <p>{card.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
