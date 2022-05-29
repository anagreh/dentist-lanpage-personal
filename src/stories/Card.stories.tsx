import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../components/Card';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Card> = ({ ...props }) => (
  <Card {...props} />
);

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  src: 'https://source.unsplash.com/300x300/?portrait&img=1',
  alt: 'img',
  content:
    'Lorem ipsum dolor sit amet . Nemo odio accusantium corrupti eaque nihil iure natus fugiat. Necessitatibus, fuga repudiandae.',
};
