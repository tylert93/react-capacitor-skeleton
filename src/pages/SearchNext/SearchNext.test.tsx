import { renderWithRouter } from '@app/utils';

import SearchNext from './SearchNext';

describe('SearchNext', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<SearchNext />);
    expect(baseElement).toBeDefined();
  });
});
