import startCase from 'lodash/fp/startCase';
import React from 'react';
import { Labelfont, LabelWrapper } from './label.styles';

const Label = ({
  text,
  isActive
}) => {
  return <span>{text}</span>
};

export default Label;