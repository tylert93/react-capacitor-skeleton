import { renderWithRouter } from '@app/utils';

import MessagesNext from './MessagesNext';

describe('MessagesNext', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<MessagesNext />);
    expect(baseElement).toBeDefined();
  });
});
