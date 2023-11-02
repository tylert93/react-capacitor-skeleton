import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import {
  ExploreIndex,
  ExploreNext,
  Loader,
  MessagesIndex,
  MessagesNext,
  NotFound,
  ProfileIndex,
  ProfileNext,
  SearchIndex,
  SearchNext,
} from '@app/pages';
import {
  ExploreSection,
  MessagesSection,
  ProfileSection,
  SearchSection,
} from '@app/sections';
import { Platform } from '@app/types';
import { Device } from '@capacitor/device';

import Layout from '../Layout/Layout';

const App: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>();

  const logDeviceInfo = async () => {
    const info = await Device.getInfo();
    setPlatform(info.platform as Platform);
  };

  useEffect(() => {
    logDeviceInfo();
  }, []);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Navigate replace to="/explore" />} />
      <Route element={platform ? <Layout platform={platform} /> : <Loader />}>
        <Route element={<ExploreSection />}>
          <Route path="/explore" element={<ExploreIndex />} />
          <Route path="/explore/next" element={<ExploreNext />} />
        </Route>
        <Route element={<SearchSection />}>
          <Route path="/search" element={<SearchIndex />} />
          <Route path="/search/next" element={<SearchNext />} />
        </Route>
        <Route element={<MessagesSection />}>
          <Route path="/messages" element={<MessagesIndex />} />
          <Route path="/messages/next" element={<MessagesNext />} />
        </Route>
        <Route element={<ProfileSection />}>
          <Route path="/profile" element={<ProfileIndex />} />
          <Route path="/profile/next" element={<ProfileNext />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
