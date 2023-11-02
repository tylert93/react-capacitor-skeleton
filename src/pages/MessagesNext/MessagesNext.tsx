import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './MessagesNext.module.scss';

const MessagesNext: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Messages Next');

  return (
    <>
      <Typography>
        Shaman tonx craft beer banjo seitan. Tousled ethical pitchfork, grailed
        cliche prism man bun mustache freegan 8-bit seitan. Health goth bitters
        drinking vinegar, schlitz chartreuse brunch austin. Fingerstache cred
        cornhole banh mi four loko mustache. 8-bit cloud bread tote bag 90's
        flannel pok pok.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/messages">
          <Button>Previous</Button>
        </Link>
      </div>
    </>
  );
};

export default MessagesNext;
