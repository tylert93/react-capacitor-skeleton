import { renderWithRouter } from '@app/utils';

import ProfileSection from './ProfileSection';

describe('ProfileSection', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<ProfileSection />);
    expect(baseElement).toBeDefined();
  });
});
