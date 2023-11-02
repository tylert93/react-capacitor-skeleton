import { renderWithRouter } from '@app/utils';

import ExploreNext from './ExploreNext';

describe('ExploreNext', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<ExploreNext />);
    expect(baseElement).toBeDefined();
  });
});
