import { renderWithRouter } from '@app/utils';

import ExploreSection from './ExploreSection';

describe('ExploreSection', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<ExploreSection />);
    expect(baseElement).toBeDefined();
  });
});
