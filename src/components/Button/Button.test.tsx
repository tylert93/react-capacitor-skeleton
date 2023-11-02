import { vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

userEvent.setup();

describe('Button', () => {
  test('should render', () => {
    const { baseElement } = render(<Button>click me</Button>);
    expect(baseElement).toBeDefined();
  });

  test('should display children', () => {
    const screen = render(<Button>click me</Button>);
    expect(screen.getByText('click me')).toBeDefined();
  });

  test('should call onClick', async () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick}>click me</Button>);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
