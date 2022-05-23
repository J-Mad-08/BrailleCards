import React, { useState } from "react";
import { Button, Card, CardMedia } from "@mui/material";
import Counter from "./Counter";
import ConstantStaticRender from "./ConstantStaticRender";

// should be mapped
export default function BrailleCard() {
  // keep track of prev card, should be set for every card change
  // passing in func to use useState so four only run the first time rendered
  //useState(()=> "./images/A.jpg")
  const [prevCard, setPrevCard] = useState(() => require("./images/A.jpg"));
  const [input, setInput] = useState("");
  function nextCardClickHandler(e) {
    e.preventDefault();
    console.log("next button clicked");
    // setPrevCard((prevState => )) first
    // fetch another card from the db
  }

  function prevCardClickHandler(e) {
    e.preventDefault();
    console.log("prev button clicked");
    //display prevCard
  }

  function changeInputHandler(e) {
    e.preventDefault();

    // compare the fetch against value
    const { value } = e.target;

    setInput(value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    // console.log(input, "in formSubmitHandler");
    fetch(`http://localhost:4001/card/{input}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }
  return (
    // center the styling
    <>
      <ConstantStaticRender />
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="500"
          alt="North American Braille alphabet"
          // had to require image in. Material UI is Not as intuitive as originally believed
          image={prevCard}
          // className="center-Card"
        />
        {/* <img className="" src={require("./images/A.jpg")} />A braille card */}
        {/* form as another component? */}
        <form onSubmit={formSubmitHandler}>
          Enter the corresponding English alphabetic character{" "}
          <input type="text" onChange={changeInputHandler} />
        </form>
        <Button className="button-prev" onClick={prevCardClickHandler}>
          Previous card
        </Button>
        <Button className="button-Next" onClick={nextCardClickHandler}>
          Next card
        </Button>
      </Card>
      <Counter />
    </>
  );
}
