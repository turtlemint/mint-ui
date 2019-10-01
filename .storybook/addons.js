// register the notes addon as a tab
import '@storybook/addon-notes/register';
// or register the notes addon as a panel. Only one can be used!
import '@storybook/addon-notes/register-panel';
import '@storybook/addon-viewport/register';
// Can't use knobs in Typescript due to issue - https://github.com/storybookjs/storybook/issues/2964
// import '@storybook/addon-knobs/register';
import '@storybook/addon-a11y/register';
import '@storybook/addon-actions/register';
