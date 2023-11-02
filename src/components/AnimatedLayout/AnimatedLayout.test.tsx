import { renderWithRouter } from '@app/utils';
import { screen } from '@testing-library/react';

import AnimatedLayout from './AnimatedLayout';

const Component = () => (
  <AnimatedLayout>
    <div data-testid="animated-layout-children" />
  </AnimatedLayout>
);

describe('AnimatedLayout', () => {
  test('should render without crashing', () => {
    const { baseElement } = renderWithRouter(<Component />);
    expect(baseElement).toBeDefined();
  });

  test('should render children', () => {
    renderWithRouter(<Component />);
    expect(screen.getByTestId('animated-layout-children')).toBeInTheDocument();
  });
});
