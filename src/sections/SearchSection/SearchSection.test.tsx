import { renderWithRouter } from '@app/utils';

import SearchSection from './SearchSection';

describe('SearchSection', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<SearchSection />);
    expect(baseElement).toBeDefined();
  });
});
