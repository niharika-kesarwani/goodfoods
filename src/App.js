import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var indian = [
    {
      name: "Butter Chicken",
      rate: 4
    },
    {
      name: "Paneer Kofta",
      rate: 4.5
    }
  ];

  var chinese = [
    {
      name: "Veg Manchurian",
      rate: 4.5
    },
    {
      name: "Paneer 65",
      rate: 3.5
    }
  ];

  var mexican = [
    {
      name: "Veg Augratin",
      rate: 3.5
    },
    {
      name: "Enchiladas",
      rate: 5
    }
  ];

  var foodList = [indian, chinese, mexican];

  var [name1, setName1] = useState(indian[0]["name"]);
  var [rate1, setRate1] = useState(indian[0]["rate"]);
  var [name2, setName2] = useState(indian[1]["name"]);
  var [rate2, setRate2] = useState(indian[0]["rate"]);

  function clickHandler(index) {
    setName1(foodList[index][0]["name"]);
    setRate1(foodList[index][0]["rate"]);
    setName2(foodList[index][1]["name"]);
    setRate2(foodList[index][1]["rate"]);
  }

  return (
    <div className="App">
      <h1
        style={{
          paddingTop: "2rem",
          textAlign: "start"
        }}
      >
        {" "}
        <span role="img" aria-label="">
          🍔{" "}
        </span>
        goodfoods
      </h1>
      <div style={{ textAlign: "start" }}>
        Checkout my favorite foods. Select a cuisine to get started
      </div>

      <button onClick={() => clickHandler(0)} className="cuisineButton">
        Indian
      </button>
      <button onClick={() => clickHandler(1)} className="cuisineButton">
        Chinese
      </button>
      <button onClick={() => clickHandler(2)} className="cuisineButton">
        Mexican
      </button>

      <hr />

      <section className="block">
        <section className="details">
          <div className="name">{name1}</div>
          <div className="rate">{rate1}/5</div>
        </section>
      </section>

      <section className="block">
        <section className="details">
          <div className="name">{name2}</div>
          <div className="rate">{rate2}/5</div>
        </section>
      </section>
    </div>
  );
}
