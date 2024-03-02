import { BtnWrapper, Btn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const feedbackOptions = ["good", "neutral", "bad"];

  return (
    <BtnWrapper>
      {feedbackOptions.map((option) => (
        <Btn key={option} type="button" name={option} onClick={onLeaveFeedback}>
          {option}
        </Btn>
      ))}
    </BtnWrapper>
  );
};

export default FeedbackOptions;
