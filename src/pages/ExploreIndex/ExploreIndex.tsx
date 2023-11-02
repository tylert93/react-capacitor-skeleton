import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './ExploreIndex.module.scss';

const ExploreIndex: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Explore');

  return (
    <>
      <Typography>
        Actually organic kombucha butcher unicorn portland truffaut tofu
        iceland. La croix schlitz roof party wayfarers microdosing ennui selfies
        sustainable raw denim. Austin quinoa photo booth, VHS activated charcoal
        beard bicycle rights. Gochujang skateboard photo booth hoodie fashion
        axe, artisan flexitarian vinyl Brooklyn.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/explore/next">
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default ExploreIndex;
