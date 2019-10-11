import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";
import Button from "../atomicComponents/Button";
import TextArea from "../atomicComponents/TextArea";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("button", module)
  .add("text", () => <Button type="text" text="POST" />)
  .add("text2", () => <Button type="text" text="POST"/>)
  //.add("icon heart", () => <Button type="icon" iconType="favor" />)
  .add("icon close", () => <Button type="icon" iconType="close" />);

storiesOf("textArea", module).add("basic", () => (
  <TextArea rows="4" cols="10" />
));
