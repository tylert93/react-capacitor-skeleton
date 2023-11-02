import { renderWithRouter } from '@app/utils';

import ProfileNext from './ProfileNext';

describe('ProfileNext', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<ProfileNext />);
    expect(baseElement).toBeDefined();
  });
});
