import { Link } from 'react-router-dom';

import { Typography } from '@app/components';

import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <Typography tag="h3">404 | page not found</Typography>
      <Typography>
        Click <Link to="/explore">here</Link> to return to the explore page.
      </Typography>
    </div>
  );
};

export default NotFound;
