import React from 'react';
import { Meta, Story} from '@storybook/react';
import HeapVisualization from '../src/heap-visualization';

const meta: Meta = {
    title: 'Heap Allocation',
    component: HeapVisualization
}

export default meta;

export const Default = () => <HeapVisualization />