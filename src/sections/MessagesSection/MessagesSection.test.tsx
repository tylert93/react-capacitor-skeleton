import { renderWithRouter } from '@app/utils';

import MessagesSection from './MessagesSection';

describe('MessagesSection', () => {
  test('should render  without crashing', () => {
    const { baseElement } = renderWithRouter(<MessagesSection />);
    expect(baseElement).toBeDefined();
  });
});
