import {} from 'react-router-dom';
import { vi } from 'vitest';

import { renderWithRouter } from '@app/utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NotFound from './NotFound';

const mockHistoryPush = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<object>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockHistoryPush,
  };
});

describe('NotFound', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<NotFound />);
    expect(baseElement).toBeDefined();
  });

  test('should navigate to Explore page on link click', async () => {
    renderWithRouter(<NotFound />);

    const link = screen.getByText('here');
    await userEvent.click(link);

    expect(window.location.pathname).toBe('/explore');
  });
});
