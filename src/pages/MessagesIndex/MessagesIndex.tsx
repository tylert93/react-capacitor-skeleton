import { Link } from 'react-router-dom';

import { Button, Typography } from '@app/components';
import { useLayout } from '@app/hooks';

import s from './MessagesIndex.module.scss';

const MessagesIndex: React.FC = () => {
  const { applyPageTitle } = useLayout();
  applyPageTitle('Messages');

  return (
    <>
      <Typography>
        Jean shorts vice dreamcatcher, messenger bag intelligentsia biodiesel
        selvage. Aesthetic cardigan truffaut same before they sold out gorpcore,
        green juice actually tonx succulents meditation. Kickstarter glossier
        brunch sus YOLO, shoreditch actually mumblecore direct trade letterpress
        single-origin coffee normcore. Everyday carry scenester actually YOLO
        food truck gorpcore post-ironic JOMO jianbing letterpress williamsburg.
      </Typography>

      <div className={s.btnContainer}>
        <Link to="/messages/next">
          <Button>Next</Button>
        </Link>
      </div>
    </>
  );
};

export default MessagesIndex;
