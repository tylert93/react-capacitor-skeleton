import { FC } from 'react';

import { Button } from '@app/components';

import { AppErrorBoundaryProps } from './AppErrorBoundary.types';

import s from './AppErrorBoundary.module.scss';

const AppErrorBoundary: FC<AppErrorBoundaryProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className={s.wrapper} role="alert">
      <p>Something went wrong:</p>
      <pre className={s.errorMsg}>{error.message}</pre>
      <Button onClick={resetErrorBoundary}>Reset</Button>
    </div>
  );
};

export default AppErrorBoundary;
