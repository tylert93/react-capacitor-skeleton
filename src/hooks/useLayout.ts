import { useLayoutEffect } from 'react';

import { useAppMetaStore } from '@app/stores';

const useLayout = () => {
  const { pageTitle, setPageTitle, appSection, setAppSection } =
    useAppMetaStore();

  const applyPageTitle = (title: string) => {
    useLayoutEffect(() => {
      if (!title) return;
      if (title === pageTitle) return;

      return setPageTitle(title);
    }, []);
  };

  const applyAppSection = (section: string) => {
    useLayoutEffect(() => {
      if (!section) return;
      if (section === appSection) return;

      return setAppSection(section);
    }, []);
  };

  return {
    applyPageTitle,
    applyAppSection,
  };
};

export default useLayout;
