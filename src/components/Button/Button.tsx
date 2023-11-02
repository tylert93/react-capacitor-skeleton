import { FC } from 'react';

import { ButtonProps } from './Button.types';

import s from './Button.module.scss';

const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button className={s.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
