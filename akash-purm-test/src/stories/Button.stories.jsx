import React, { useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = () => {
  const [value, setValue] = useState("Click Me");
  const [clicked, setClicked] = useState(false);

  const handleOnChange = () => {
    setClicked(!clicked);
    if (!clicked) {
      setValue("Click Me");
    } else {
      setValue("Thank You");
    }
  };
  return <Button primary={true} onClick={handleOnChange} label={value} />;
};
