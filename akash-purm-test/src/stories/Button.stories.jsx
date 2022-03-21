import React, { useState, useEffect } from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

// const Template = (args) => <Button {...args} />;

export const Primary = () => {
  const [value, setValue] = useState("Click Me");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!clicked) {
      setValue("Click Me");
    } else {
      setValue("Thank You");
    }
  }, [clicked]);

  const handleOnChange = () => {
    setClicked(!clicked);
  };
  return <Button primary={true} onClick={handleOnChange} label={value} />;
};
