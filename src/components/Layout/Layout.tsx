import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { FaCompass, FaRegCompass } from 'react-icons/fa6';
import {
  HiEnvelope,
  HiOutlineEnvelope,
  HiOutlineUserCircle,
  HiUserCircle,
} from 'react-icons/hi2';
import { PiMagnifyingGlass, PiMagnifyingGlassFill } from 'react-icons/pi';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

import { Typography } from '@app/components';
import { useAppMetaStore } from '@app/stores';
import { Platform, Section } from '@app/types';
import { getStyles } from '@app/utils';

import { LayoutProps } from './Layout.types';

import s from './Layout.module.scss';

const Layout: FC<LayoutProps> = ({ platform }) => {
  const { pageTitle, appSection } = useAppMetaStore();

  return (
    <div
      className={getStyles({
        [s.container]: true,
        [s.IOS]: platform === Platform.IOS,
      })}
    >
      <Helmet>
        <title>{pageTitle ? `My App - ${pageTitle}` : 'My App'}</title>
      </Helmet>
      <div
        className={getStyles({
          [s.header]: true,
          [s.IOS]: platform === Platform.IOS,
        })}
      >
        <Typography tag="h3" gutter={false}>
          {pageTitle}
        </Typography>
      </div>

      <div className={s.content}>
        <Outlet />
      </div>

      <div
        className={getStyles({
          [s.footer]: true,
          [s.IOS]: platform === Platform.IOS,
        })}
      >
        <Link to="/explore" className={s.navButton}>
          {appSection === Section.EXPLORE ? (
            <FaCompass className={[s.icon, s.active].join(' ')} />
          ) : (
            <FaRegCompass className={s.icon} />
          )}
        </Link>

        <Link to="/search" className={s.navButton}>
          {appSection === Section.SEARCH ? (
            <PiMagnifyingGlassFill className={[s.icon, s.active].join(' ')} />
          ) : (
            <PiMagnifyingGlass className={s.icon} />
          )}
        </Link>
        <Link to="/messages" className={s.navButton}>
          {appSection === Section.MESSAGES ? (
            <HiEnvelope className={[s.icon, s.active].join(' ')} />
          ) : (
            <HiOutlineEnvelope className={s.icon} />
          )}
        </Link>
        <Link to="/profile" className={s.navButton}>
          {appSection === Section.PROFILE ? (
            <HiUserCircle className={[s.icon, s.active].join(' ')} />
          ) : (
            <HiOutlineUserCircle className={s.icon} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Layout;
