import React from "react";
import { useState } from "react";
import SignUp from "../routes-frontEnd/SignUp";
import BrailleCard from "./BrailleCard";
import CreateAUser from "./CreateAUser";

import { Button } from "@mui/material";

export default function UserQ() {
  //update state
  // yes? red
  const [showYesButton, setShowYesButton] = useState(false);
  const [showNoButton, setShowNoButton] = useState(false);
  //const [yesButton, setYesState] = useState(null);

  //function fetchSignIn() {}

  return (
    <div>
      <section>
        <BrailleCard />
        <span className="account-q">Do you have an account?</span>
        {showYesButton ? <SignUp /> : null}
        <span className="ButtonUserQ">
          <span className="leftButtonUserQ">
            <Button variant="outlined" onClick={() => setShowYesButton(true)}>
              Yes
            </Button>
          </span>
        </span>
        {showNoButton ? <CreateAUser /> : null}
        <span className="ButtonUserQ">
          <Button variant="outlined" onClick={() => setShowNoButton(true)}>
            No
          </Button>
        </span>
      </section>
    </div>
  );
}
