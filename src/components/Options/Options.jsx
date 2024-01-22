import css from '../Options/Options.module.css';

export const Options = ({ onUpdate, isHidden, onReset }) => {
  return (
    <div className={css.buttons}>
      <button onClick={() => onUpdate('good')} name="good">
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} name="neutral">
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} name="bad">
        Bad
      </button>
      {isHidden ? <button onClick={onReset}>Reset</button> : null}
    </div>
  );
};
