import { renderWithRouter } from '@app/utils';

import MessagesIndex from './MessagesIndex';

describe('MessageIndex', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<MessagesIndex />);
    expect(baseElement).toBeDefined();
  });
});
