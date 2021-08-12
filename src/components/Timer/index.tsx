import React from 'react';
import Countdown from 'react-countdown';
import classNames from 'classnames';

import './style.scss';

interface TimerProps {
  dateInFuture: number;
  className?: string;
  onComplete?: () => void;
}

export default function Timer({ dateInFuture, className, onComplete }: TimerProps) {
  const renderer = ({ days, hours, minutes, completed }: any) => {
    if (completed) {
      return null;
    }
    return (
      <span className={classNames('Timer', className)}>
        <b>{days}</b>d <b>{hours}</b>h <b>{minutes}</b>m
      </span>
    );
  };

  return (
    <Countdown date={new Date(dateInFuture * 1000)} renderer={renderer} onComplete={onComplete} />
  );
}
