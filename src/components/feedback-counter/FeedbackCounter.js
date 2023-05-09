
import React from 'react';

import FeedbackOptions from 'components/feedback-options/FeedbackOptions';

import Statistics from 'components/statistics/Statistics';

import css from './FeedbackCounter.module.css';

class FeedbackCounter extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const positiveFeedbackPercentage = ((good / countTotalFeedback) * 100).toFixed([0]);

    
    return (
      <div className={css.containerWrap}>
        <h1>Pleas leave feedback</h1>
                    
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.handleLeaveFeedback}
        />

        <h2>Statistics</h2>

        <Statistics
          {...this.state}
          total={countTotalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
     </div>
    );
  };
};

export default FeedbackCounter;