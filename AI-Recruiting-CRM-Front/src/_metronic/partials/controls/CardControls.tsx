import React, { ReactNode } from 'react';

interface CardHeaderProps {
  className?: string;
  children?: ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => (
  <div className={`card-header ${className || ''}`}>
    {children}
  </div>
);

interface CardBodyProps {
  className?: string;
  children?: ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => (
  <div className={`card-body ${className || ''}`}>
    {children}
  </div>
);

interface CardProps {
  className?: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`card ${className || ''}`}>
    {children}
  </div>
);
