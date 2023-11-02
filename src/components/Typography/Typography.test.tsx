import { vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Typography from './Typography';

userEvent.setup();

describe('Typography', () => {
  test('should render without crashing', () => {
    const { baseElement } = render(<Typography>text</Typography>);
    expect(baseElement).toBeDefined();
  });

  test('should render children', () => {
    render(<Typography>text</Typography>);

    const text = screen.getByText('text');
    expect(text).toBeInTheDocument();
  });

  test('should render as p tag by default', () => {
    const { container } = render(<Typography>click me</Typography>);

    expect(container.querySelector('p')).toBeInTheDocument();
  });

  test('should render as chosen tag', () => {
    const { container } = render(<Typography tag="h1">click me</Typography>);

    expect(container.querySelector('h1')).toBeInTheDocument();
  });
});
