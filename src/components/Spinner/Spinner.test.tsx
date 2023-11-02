import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('Spinner', () => {
  test('renders without crashing', () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toBeDefined();
  });
});
