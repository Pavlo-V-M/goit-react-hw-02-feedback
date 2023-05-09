
// import React from "react";

// import css from './FeedbackOptions.module.css'

// const FeedbackOptions = props => {
//   const {onGood, onNeutral, onBad} = props
//   return (
//     <div className={css.optionsWrap}>
//       <button className={css.optionsBtn} type="button" onClick={onGood}>Good</button>
//       <button className={css.optionsBtn} type="button" onClick={onNeutral}>Neutral</button>
//       <button className={css.optionsBtn} type="button" onClick={onBad}>Bad</button>
//     </div>
//   )
  
// }

// export default FeedbackOptions;

import PropTypes from 'prop-types';
import React from "react";
import css from './FeedbackOptions.module.css'

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  // const optionsArray = Object.keys(options);
  return (
    <div className={css.optionsWrap}>
      {/* {optionsArray.map((option) => ( */}
      {options.map((option) => (
        <button
          key={option}
          className={css.optionsBtn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          // onClick={onLeaveFeedback}
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
