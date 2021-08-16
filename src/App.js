import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var indian = [
    {
      name: "Butter Chicken",
      desc:
        "Chunks of grilled chicken (tandoori chicken) cooked in a smooth buttery & creamy tomato based gravy",
      rate: 4
    },
    {
      name: "Paneer Kofta",
      desc:
        "A rich, creamy and spicy curry masala recipe served with stuffed paneer balls",
      rate: 4.5
    },
    {
      name: "Dum Aloo",
      desc:
        "A delicious recipe of baby potatoes cooked in a rich onion tomato based curry or sauce",
      rate: 5
    }
  ];

  var chinese = [
    {
      name: "Veg Manchurian",
      desc:
        "A tasty Indo Chinese dish of fried veggie balls in a spicy, sweet and tangy sauce",
      rate: 4.5
    },
    {
      name: "Paneer 65",
      desc:
        "A spicy appetizer made with paneer, flour, yogurt, curry leaves and spices prepared by deep-frying spicy paste coated paneer cubes",
      rate: 3.5
    },
    {
      name: "Fried Rice",
      desc:
        "A dish of cooked rice that has been stir-fried in a wok or a frying pan and is mixed with other vegetables",
      rate: 4
    }
  ];

  var mexican = [
    {
      name: "Veg Augratin",
      desc:
        "A continental delicacy made with mixed vegetables and white sauce as base",
      rate: 3.5
    },
    {
      name: "Enchiladas",
      desc:
        "A corn tortilla rolled around a filling and covered with a savory sauce and is usually baked",
      rate: 5
    },
    {
      name: "Quesadillas",
      desc:
        "Consists of a tortilla that is filled primarily with cheese, spices, and other fillings, and then cooked on a griddle or stove.",
      rate: 4.5
    }
  ];

  var foodList = [indian, chinese, mexican];

  var [name1, setName1] = useState(indian[0]["name"]);
  var [desc1, setDesc1] = useState(indian[0]["desc"]);
  var [rate1, setRate1] = useState(indian[0]["rate"]);
  var [name2, setName2] = useState(indian[1]["name"]);
  var [desc2, setDesc2] = useState(indian[1]["desc"]);
  var [rate2, setRate2] = useState(indian[1]["rate"]);
  var [name3, setName3] = useState(indian[2]["name"]);
  var [desc3, setDesc3] = useState(indian[2]["desc"]);
  var [rate3, setRate3] = useState(indian[2]["rate"]);

  function clickHandler(index) {
    setName1(foodList[index][0]["name"]);
    setDesc1(foodList[index][0]["desc"]);
    setRate1(foodList[index][0]["rate"]);
    setName2(foodList[index][1]["name"]);
    setDesc2(foodList[index][1]["desc"]);
    setRate2(foodList[index][1]["rate"]);
    setName3(foodList[index][2]["name"]);
    setDesc3(foodList[index][2]["desc"]);
    setRate3(foodList[index][2]["rate"]);
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
          <div className="desc">{desc1}</div>
          <div className="rate">{rate1}/5</div>
        </section>
      </section>

      <section className="block">
        <section className="details">
          <div className="name">{name2}</div>
          <div className="desc">{desc2}</div>
          <div className="rate">{rate2}/5</div>
        </section>
      </section>

      <section className="block">
        <section className="details">
          <div className="name">{name3}</div>
          <div className="desc">{desc3}</div>
          <div className="rate">{rate3}/5</div>
        </section>
      </section>
    </div>
  );
}
