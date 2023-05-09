
import PropTypes from 'prop-types';
import React from "react";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div className={css.optionsWrap}>
      {options.map((option) => (
        <button
          key={option}
          className={css.optionsBtn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default FeedbackOptions;
