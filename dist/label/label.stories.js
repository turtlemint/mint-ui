import React from "react";
import Label from "./label";
import { stories } from '../storybook';
import { text, boolean } from '@storybook/addon-knobs/react';
stories.add("Label", () => <Label text={text('text', 'Sample label')} isActive={boolean('isActive', true)} />, {
  info: <Label text={text('text', 'Sample label')} isActive={boolean('isActive', true)} />
});