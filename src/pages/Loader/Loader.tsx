import { Spinner } from '@app/components';

import s from './Loader.module.scss';

const Loader = () => (
  <div className={s.container}>
    <Spinner />
  </div>
);

export default Loader;
