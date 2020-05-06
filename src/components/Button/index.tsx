import React from 'react';

export interface Props {
  onClick: () => void;
  onMouseOver: () => void;
}
export const Button: React.FC<Props> = ({ children, onClick, onMouseOver }) => {
  return (
    <button onClick={onClick} onMouseOver={onMouseOver}>
      {children}
    </button>
  );
};
