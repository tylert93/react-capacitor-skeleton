import { ReactNode } from 'react';

export interface TypographyProps {
  tag?: 'p' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  gutter?: boolean;
  children: ReactNode;
}
