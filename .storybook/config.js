import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import { theme } from '../src/styles/theme';

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>
        {storyFn()}
    </ThemeProvider>
)

const AppDecorator = storyFn => {
    const Padding = styled(View)`
        padding: 20px;
    `;

    return (
        <Padding>
            {storyFn()}
        </Padding>
    )
}

addDecorator(
    withInfo({
        styles: {
            header: {
                h1: {
                    marginRight: '20px',
                    fontSize: '25px',
                    display: 'inline',
                },
                body: {
                    paddingTop: 0,
                    paddingBottom: 0,
                },
                h2: {
                    display: 'inline',
                    color: '#999',
                },
                backgroundColor: '#FFFFFF'
            },
            infoBody: {
                backgroundColor: '#F6F9FC',
                padding: '20px',
                lineHeight: '2',
            },
        },
        inline: true,
        source: false
    })
);
addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(ThemeDecorator);
addDecorator(AppDecorator);

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/', true, /.stories.tsx$/);

function loadStories() {
    require('./welcomeStory');
    return req.keys().forEach(req);

}

configure(loadStories, module)

