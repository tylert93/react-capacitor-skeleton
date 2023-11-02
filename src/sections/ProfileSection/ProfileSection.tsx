import { Outlet } from 'react-router';

import { AnimatedLayout } from '@app/components';
import { useLayout } from '@app/hooks';
import { Section } from '@app/types';

const ProfileSection = () => {
  const { applyAppSection } = useLayout();
  applyAppSection(Section.PROFILE);

  return (
    <AnimatedLayout>
      <Outlet />
    </AnimatedLayout>
  );
};

export default ProfileSection;
