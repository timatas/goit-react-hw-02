import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({ number: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const percentStatistic = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div className={css.content}>
      {totalFeedback > 0 ? (
        <ul>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {totalFeedback}</li>
          <li className={css.item}>Positive: {percentStatistic}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
};
