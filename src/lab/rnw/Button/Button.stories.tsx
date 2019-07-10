import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs/react';

import Button from './';

storiesOf('Components (Experimental)', module)
.add('Button', () => {
  const label = text('label', 'Button')
  const type = select('type', ['primary', 'outline', 'plain', 'destructive'], 'primary');
  const size = select('size', ['regular', 'small'], 'regular');
  return (
    <Button 
      label={label} 
      type={type} 
      size={size}
    />
  )
});

