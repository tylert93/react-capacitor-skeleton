import { ErrorBoundary } from 'react-error-boundary';
import { vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AppErrorBoundary from './AppErrorBoundary';

// prevents noise relating to uncaught errors in the terminal output
vi.spyOn(console, 'error').mockImplementation(() => null);

describe('AppErrorBoundary', () => {
  test('should render', () => {
    const { baseElement } = render(
      <AppErrorBoundary
        error={{ message: 'error' }}
        resetErrorBoundary={() => {}}
      />
    );
    expect(baseElement).toBeDefined();
  });

  test('should render and display the error message when error is thrown', () => {
    const Component = () => {
      throw new Error('oopsy daisy');
    };

    render(
      <ErrorBoundary FallbackComponent={AppErrorBoundary}>
        <Component />
      </ErrorBoundary>
    );

    expect(screen.getByText('oopsy daisy')).toBeDefined();
  });

  test('should call onReset', async () => {
    const Component = () => {
      throw new Error('oopsy daisy');
    };

    const mockOnReset = vi.fn();

    render(
      <ErrorBoundary FallbackComponent={AppErrorBoundary} onReset={mockOnReset}>
        <Component />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(mockOnReset).toHaveBeenCalledTimes(1);
  });
});
