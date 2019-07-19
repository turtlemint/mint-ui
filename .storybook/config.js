    import { configure, addDecorator } from "@storybook/react";
    import { withInfo } from '@storybook/addon-info';
    import { jsxDecorator } from 'storybook-addon-jsx';
    import { withKnobs } from '@storybook/addon-knobs';

    addDecorator(jsxDecorator);
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
            },
            infoBody: {
                backgroundColor: '#eee',
                padding: '0px 5px',
                lineHeight: '2',
            },
            },
            inline: true,
            source: false,
        })
    );
    addDecorator(withKnobs);

    // automatically import all files ending in *.stories.tsx
    const req = require.context('../src/components/', true, /.stories.tsx$/);

    function loadStories() {
        require('./welcomeStory');
        return req.keys().forEach(req);
        
    }

    configure(loadStories, module)

