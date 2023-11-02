import { render } from '@testing-library/react';

import Loader from './Loader';

describe('Loader', () => {
  test('should render without crashing', () => {
    const { baseElement } = render(<Loader />);
    expect(baseElement).toBeDefined();
  });
});
