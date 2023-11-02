import { renderWithRouter } from '@app/utils';

import ProfileIndex from './ProfileIndex';

describe('ProfileIndex', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<ProfileIndex />);
    expect(baseElement).toBeDefined();
  });
});
