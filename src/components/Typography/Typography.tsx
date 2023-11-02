import { FC } from 'react';

import { getStyles } from '@app/utils';

import { TypographyProps } from './Typography.types';

import s from './Typography.module.scss';

const Typography: FC<TypographyProps> = ({
  tag = 'p',
  size = 'md',
  gutter = true,
  children,
}) => {
  const TagName = tag;

  return (
    <TagName
      className={getStyles({
        [s[size]]: true,
        [s[tag]]: true,
        [s.withMargin]: gutter,
      })}
    >
      {children}
    </TagName>
  );
};

export default Typography;
