import React from 'react';
import { Meta, Story} from '@storybook/react';
import {Button, IButtonProps} from '../src/components/button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
          options: ['primary', 'secondary'],
          control: { type: 'radio' },
        },
      },
}

export default meta;

export const Default = () => <Button variant='primary'>CLICK ME</Button>
export const Secundary = () => <Button variant='secundary'>NO ME</Button>
