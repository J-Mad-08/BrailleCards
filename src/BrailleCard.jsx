import React from "react";
import { Button, Card, CardMedia } from "@mui/material";
import Counter from "./Counter";
import ConstantStaticRender from "./ConstantStaticRender";
// should be mapped
export default function BrailleCard() {
  function nextCardClick(e) {
    e.preventDefault();
    console.log("next button clicked");
    // fetch another card from the db
  }

  function prevCardClick(e) {
    e.preventDefault();
    console.log("prev button clicked");
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
          image={require("./images/A.jpg")}
          // className="center-Card"
        />
        {/* <img className="" src={require("./images/A.jpg")} />A braille card */}
        {/* form as another component? */}
        <form>
          Enter the corresponding English alphabetic character <input />
        </form>
        <Button className="button-prev" onClick={prevCardClick}>
          Previous card
        </Button>
        <Button className="button-Next" onClick={nextCardClick}>
          Next card
        </Button>
      </Card>
      <Counter />
    </>
  );
}
