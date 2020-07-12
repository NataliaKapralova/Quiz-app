import React from "react";
import styled from "styled-components";
import Header from "./Header";

function PlayComponent({
  handleAnswer,
  showNextButton,
  handleNextQuestion,
  handlePreviousQuestion,
  data: { question, correct_answer, answers, },
}) {
  return (
    <div>
      <Header />
      <Wrapper>
        <Title dangerouslySetInnerHTML={{ __html: question }} />
        <AnswerContainer>
          {answers.map((answer, idx) => (
            <Button
              key={idx}
              className={answer === correct_answer ? "line-through" : ""}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </AnswerContainer>
        <Button
          disabeld={question.lenght <= 0 ? disabledButton : ""}
          onClick={handlePreviousQuestion}
        >
          {" "}
          prev question{" "}
        </Button>
        {showNextButton && (
          <Button onClick={handleNextQuestion}> Next question </Button>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  padding: 4em;
  background: white;
`;

const Title = styled.h1`
  font-size: 1.8em;
  text-align: center;
  color: #204051;
  background-color: white;
  padding-bottom: 2em;
`;

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Button = styled.button`
  &:hover {
    color: red; // <Thing> when hovered
  }
  &:focus {
    border: none;
  }

  color: black;
  font-size: 1em;
  margin: 10px;
  padding: 0.25em 1em;
  border: 1px solid silver;
  border-left: 4px solid #3b6978;
`;

const disabledButton = styled.button`
  display: none;
`;

export default PlayComponent;
