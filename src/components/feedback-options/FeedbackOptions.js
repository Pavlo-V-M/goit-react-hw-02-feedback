
import React from "react";

import css from './FeedbackOptions.module.css'

const FeedbackOptions = props => {
  const {onGood, onNeutral, onBad} = props
  return (
    <div className={css.optionsWrap}>
      <button className={css.optionsBtn} type="button" onClick={onGood}>Good</button>
      <button className={css.optionsBtn} type="button" onClick={onNeutral}>Neutral</button>
      <button className={css.optionsBtn} type="button" onClick={onBad}>Bad</button>
    </div>
  )
  
}

export default FeedbackOptions;