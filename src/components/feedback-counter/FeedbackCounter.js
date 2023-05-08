
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

  // handleGood = () => {
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };
  handleGood = () => {
  this.setState(prevState => ({
    ...prevState,
    good: prevState.good + 1,
  }));
  };

  // handleNeutral = () => {
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };
  handleNeutral = () => {
  this.setState(prevState => ({
    ...prevState,
    neutral: prevState.neutral + 1,
  }));
  };

  // handleBad = () => {
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };
  handleBad = () => {
  this.setState(prevState => ({
    ...prevState,
    bad: prevState.bad + 1,
  }));
};

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div className={css.containerWrap}>
        <h1>Pleas leave feedback</h1>
                    
        <FeedbackOptions
          // onGood={this.handleGood}
          // onNeutral={this.handleNeutral}
          // onBad={this.handleBad}
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.handleLeaveFeedback}
        />

        <h2>Statistics</h2>

        <Statistics
          // good={this.state.good}
          // neutral={this.state.neutral}
          // bad={this.state.bad}
          {...this.state}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
     </div>
    );
  };
};

export default FeedbackCounter;