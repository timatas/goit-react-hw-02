import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({ number: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const percentStatistic = Math.round(((good + neutral) / totalFeedback) * 100);
  return (
    <div className={css.content}>
      {totalFeedback > 0 ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {percentStatistic}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
};
