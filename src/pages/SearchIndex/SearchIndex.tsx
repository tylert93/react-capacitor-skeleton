import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './SearchIndex.module.scss';

const SearchIndex: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Search');

  return (
    <>
      <Typography>
        Hot chicken air plant hammock ugh ethical banh mi swag jianbing.
        Vexillologist man braid banh mi, freegan pinterest poutine yr gochujang.
        Kickstarter cronut crucifix drinking vinegar everyday carry semiotics
        biodiesel hella. Shaman butcher tattooed, tofu authentic man bun tonx
        meditation. Fit small batch semiotics grailed retro.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/search/next">
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default SearchIndex;
