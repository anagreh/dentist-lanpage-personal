import React from 'react';
import { CardContainer } from './Card.styled';

interface CardProps {
  src: string;
  alt?: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ src, alt, content }) => {
  return (
    <CardContainer>
      <img src={src} alt={alt} />
      <p>{content}</p>
    </CardContainer>
  );
};
