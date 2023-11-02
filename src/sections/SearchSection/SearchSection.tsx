import { Outlet } from 'react-router';

import { AnimatedLayout } from '@app/components';
import { useLayout } from '@app/hooks';
import { Section } from '@app/types';

const SearchSection = () => {
  const { applyAppSection } = useLayout();
  applyAppSection(Section.SEARCH);

  return (
    <AnimatedLayout>
      <Outlet />
    </AnimatedLayout>
  );
};

export default SearchSection;
