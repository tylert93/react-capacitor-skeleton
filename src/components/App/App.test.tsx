import { vi } from 'vitest';

import { Platform } from '@app/types';
import { renderWithRouter } from '@app/utils';
import { waitFor } from '@testing-library/react';

import App from './App';

vi.mock('@capacitor/device', () => ({
  Device: {
    getInfo: () =>
      Promise.resolve({
        platform: Platform.WEB,
      }),
  },
}));

describe('App', () => {
  test('should render without crashing', async () => {
    const { baseElement } = renderWithRouter(<App />);

    await waitFor(() => {});
    expect(baseElement).toBeDefined();
  });
});
