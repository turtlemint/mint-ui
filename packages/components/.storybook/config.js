import { addParameters, configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// Can't use knobs in Typescript due to issue - https://github.com/storybookjs/storybook/issues/2964
// import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
// import '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import requireContext from 'require-context.macro';

const newViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
addParameters({
    viewport: {
        viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'someDefault',
    },
    options: {
       panelPosition: 'right',
    }
})
addDecorator(withInfo({
    infoBody: {
        padding: '0px 15px',
    },
    inline: true
}));
// addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// automatically import all files ending in *.stories.tsx
const req = requireContext('../src/', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);