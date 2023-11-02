import { create } from 'zustand';

interface AppMetaState {
  pageTitle: string;
  setPageTitle: (s: string) => void;
  appSection: string;
  setAppSection: (s: string) => void;
}

const appMetaStore = create<AppMetaState>((set) => ({
  pageTitle: '',
  setPageTitle: (title) => set(() => ({ pageTitle: title })),
  appSection: '',
  setAppSection: (section) => set(() => ({ appSection: section })),
}));

const useAppMetaStore = () => {
  const { pageTitle, setPageTitle, appSection, setAppSection } = appMetaStore(
    ({ pageTitle, setPageTitle, appSection, setAppSection }) => ({
      pageTitle,
      setPageTitle,
      appSection,
      setAppSection,
    })
  );

  return { pageTitle, setPageTitle, appSection, setAppSection };
};

export default useAppMetaStore;
