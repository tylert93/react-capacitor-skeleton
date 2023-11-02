import { Outlet } from 'react-router';

import { AnimatedLayout } from '@app/components';
import { useLayout } from '@app/hooks';
import { Section } from '@app/types';

const ExploreSection = () => {
  const { applyAppSection } = useLayout();
  applyAppSection(Section.EXPLORE);

  return (
    <AnimatedLayout>
      <Outlet />
    </AnimatedLayout>
  );
};

export default ExploreSection;
