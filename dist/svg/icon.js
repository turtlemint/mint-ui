import React from 'react';

const Icon = ({
  size = 24,
  icon,
  color = 'black'
}) => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: color
    }
  };
  return <svg width={`${size}px`} height={`${size}px`} viewBox='0 0 24 24' style={styles.svg}>
            <path d={icon} style={styles.path} />

        </svg>;
};

export default Icon;