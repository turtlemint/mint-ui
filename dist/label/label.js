import startCase from 'lodash/fp/startCase';
import React from 'react';
import { Labelfont, LabelWrapper } from './label.styles';

const Label = ({
  text,
  isActive
}) => {
  return <LabelWrapper text={text} isActive={isActive}>
            <Labelfont>{startCase(text)}</Labelfont>
        </LabelWrapper>;
};

export default Label;