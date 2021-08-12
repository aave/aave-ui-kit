import React from 'react';
import classNames from 'classnames';

import './style.scss';

interface SpinLoaderProps {
  className?: string;
  color: string;
}

export default function SpinLoader({ className, color }: SpinLoaderProps) {
  return (
    <div className={classNames('SpinLoader', className)}>
      <div className="ball-spin-fade-loader">
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
        <div style={{ backgroundColor: color }} />
      </div>
    </div>
  );
}
