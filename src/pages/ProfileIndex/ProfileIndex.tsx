import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './ProfileIndex.module.scss';

const ProfileIndex: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Profile');

  return (
    <>
      <Typography>
        Biodiesel pabst salvia, solarpunk polaroid mixtape occupy slow-carb meh
        beard church-key literally cronut stumptown waistcoat. Umami
        williamsburg meh tumeric sartorial. Blog disrupt hashtag, yr direct
        trade la croix sustainable. Gastropub schlitz ennui, kombucha
        flexitarian banh mi skateboard iceland man braid pop-up fashion axe
        vegan street art taiyaki mustache.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/profile/next">
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default ProfileIndex;
