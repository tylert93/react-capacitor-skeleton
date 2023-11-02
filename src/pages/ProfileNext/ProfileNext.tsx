import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './ProfileNext.module.scss';

const ProfileNext: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Profile Next');

  return (
    <>
      <Typography>
        Locavore crucifix stumptown 90's organic JOMO cold-pressed occupy
        schlitz marfa DIY hot chicken. Vibecession mlkshk subway tile retro
        cliche neutral milk hotel intelligentsia snackwave sustainable before
        they sold out twee beard williamsburg photo booth wayfarers.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/profile">
          <Button>Previous</Button>
        </Link>
      </div>
    </>
  );
};

export default ProfileNext;
