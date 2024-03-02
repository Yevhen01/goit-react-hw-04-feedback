import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = event => {
    setState(prevState => {
      return {
        ...prevState,
        [event.target.name]: prevState[event.target.name] + 1,
      };
    });
  };

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => good + neutral + bad;
  
  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / countTotalFeedback()) * 100);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </Section>
    </>
  );
}

export default App;
