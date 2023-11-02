import { Outlet } from 'react-router';

import { AnimatedLayout } from '@app/components';
import { useLayout } from '@app/hooks';
import { Section } from '@app/types';

const MessagesSection = () => {
  const { applyAppSection } = useLayout();
  applyAppSection(Section.MESSAGES);

  return (
    <AnimatedLayout>
      <Outlet />
    </AnimatedLayout>
  );
};

export default MessagesSection;
