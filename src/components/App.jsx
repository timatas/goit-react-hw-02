import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import css from './App.module.css';

const startFeedback = () => {
  const savedFeedback = window.localStorage.getItem('key-statistic');
  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export const App = () => {
  const [count, setCount] = useState(startFeedback);

  const onUpdate = option => {
    setCount({
      ...count,
      [option]: count[option] + 1,
    });
  };

  const onReset = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const isHidden = count.good + count.neutral + count.bad;

  useEffect(() => {
    window.localStorage.setItem('key-statistic', JSON.stringify(count));
  }, [count]);

  return (
    <div className={css.div}>
      <Description />
      <Options onUpdate={onUpdate} onReset={onReset} isHidden={isHidden} />
      <Feedback number={count} />
    </div>
  );
};
