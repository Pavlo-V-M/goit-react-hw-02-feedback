import PropTypes from 'prop-types';

import React from "react";

import Notification from "components/notification/Notification";

import css from "./Statistics.module.css"

const Statistics = props => {
  
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
   <div>
    { total > 0 ? (
      <ul>
        <li className={css.statisticsItem}>Good:<span>{good}</span></li>
        <li className={css.statisticsItem}>Neutral:<span>{neutral}</span></li>
        <li className={css.statisticsItem}>Bad:<span>{bad}</span></li>
        <li className={css.statisticsItem}>Total:<span>{total}</span></li>
        <li className={css.statisticsItem}>Positive feedback:<span>{positivePercentage}%</span></li>
      </ul>) : (
      <Notification />
      )
    }
      
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

export default Statistics;