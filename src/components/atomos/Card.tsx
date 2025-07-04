import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
