export const getStyles = (config: { [k: string]: boolean }) => {
  const classNames: string[] = [];

  for (const [key, value] of Object.entries(config)) {
    if (value) {
      classNames.push(key);
    }
  }

  return classNames.join(' ');
};
