import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './SearchNext.module.scss';

const SearchNext: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Search Next');

  return (
    <>
      <Typography>
        Locavore kitsch quinoa jawn vape taiyaki 90's waistcoat. Aesthetic tote
        bag typewriter next level iPhone authentic. Pinterest air plant art
        party kale chips jawn, 3 wolf moon succulents vaporware messenger bag
        pour-over lomo. Crucifix raw denim waistcoat, JOMO snackwave activated
        charcoal selfies glossier skateboard health goth banh mi mumblecore
        narwhal bicycle rights cronut.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/search">
          <Button>Previous</Button>
        </Link>
      </div>
    </>
  );
};

export default SearchNext;
