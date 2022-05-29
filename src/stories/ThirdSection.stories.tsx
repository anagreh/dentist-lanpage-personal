import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThirdSection } from '../components/ThirdSection';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Section/ThirdSection',
  component: ThirdSection,
} as ComponentMeta<typeof ThirdSection>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ThirdSection> = () => <ThirdSection />;

export const FirstStory = Template.bind({});
FirstStory.args = {};
