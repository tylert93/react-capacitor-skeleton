import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './ExploreNext.module.scss';

const ExploreNext: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Explore Next');

  return (
    <>
      <Typography>
        Polaroid sus DIY adaptogen, jean shorts pop-up tattooed chia ramps
        authentic. Pour-over literally subway tile truffaut fashion axe tacos
        neutral milk hotel plaid. Keytar yes plz bicycle rights, coloring book
        microdosing heirloom helvetica snackwave freegan gastropub celiac
        hammock direct trade raw denim beard.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/explore">
          <Button>Previous</Button>
        </Link>
      </div>
    </>
  );
};

export default ExploreNext;
