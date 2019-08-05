import React from "react";
import Icon from "./index";
import { stories } from '../storybook';
import { text, number } from '@storybook/addon-knobs/react';
import { ICONS } from '_utils/icons';


stories.add(
    "SVG Icon",
    () => (
        <Icon
            size={number('size', 24)}
            icon={text('icon', ICONS.ALARM)}
        />
    ),
    {
        info: <Icon
            size={number('size', 24)}
            icon={text('icon', 'alarm')}
        />

    }
);