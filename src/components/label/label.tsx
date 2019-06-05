
import startCase from 'lodash/fp/startCase';
import React from 'react';
import { Labelfont, LabelWrapper } from './label.styles';
import { ILabelProps } from './label.typings';

const Label = ({ text, isActive }: ILabelProps) => {
    return (
        <LabelWrapper text={text} isActive={isActive}>
            <Labelfont>{startCase(text)}</Labelfont>
        </LabelWrapper>
    );

};

export default Label;
