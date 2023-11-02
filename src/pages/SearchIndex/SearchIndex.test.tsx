import { renderWithRouter } from '@app/utils';

import SearchIndex from './SearchIndex';

describe('SearchIndex', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<SearchIndex />);
    expect(baseElement).toBeDefined();
  });
});
