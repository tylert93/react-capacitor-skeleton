import { renderWithRouter } from '@app/utils';

import ExploreIndex from './ExploreIndex';

describe('ExploreIndex', () => {
  test('renders without crashing', () => {
    const { baseElement } = renderWithRouter(<ExploreIndex />);
    expect(baseElement).toBeDefined();
  });
});
