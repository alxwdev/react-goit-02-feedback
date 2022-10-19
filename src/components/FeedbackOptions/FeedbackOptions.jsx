import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionKeys = Object.keys(options);

  return (
    <ul className={css.list}>
      {optionKeys.map(key => (
        <li className={css.item} key={key}>
          <button
            className={css.button}
            type="button"
            value={key}
            onClick={onLeaveFeedback}
          >
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired
};
