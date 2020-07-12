import React, { useState, useEffect } from "react";
import { PlayComponent } from "./components";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [wrongAnswers, setwrongAnswers] = useState(0);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showNextButton) {
      if (answer === questions[currentIndex].correct_answer) {
        setHasPassed(true);
        setScore(score + 1);
      } else if (score >= 5) {
        setHasPassed(true);
      } else if (score <= 5) {
        setHasPassed(false);
      }
    }
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setShowNextButton(false);
    setCurrentIndex(currentIndex + 1);
  };

  const handlePreviousQuestion = () => {
    if (questions[currentIndex].length >= questions.length[1]) {
      setShowPrevButton(true);
    }
    setCurrentIndex(currentIndex - 1);
  };

  const takeToBegin = () => {
    setCurrentIndex(currentIndex - questions.length);
    setScore(score === 0);
  };

  return questions.length > 0 ? (
    <Router>
      <Wrapper>
        {currentIndex >= questions.length ? (
          <GameEndedContainer>
            <Title> Results : </Title>
            <Text> You answerd {score} answers correctly</Text>
            <Text>
              {hasPassed
                ? "Congrats! You past the test!"
                : "You did not pas the test. Try again!"}
            </Text>
            <Button onClick={takeToBegin}> Try again </Button>
          </GameEndedContainer>
        ) : (
          <PlayComponent
            handleNextQuestion={handleNextQuestion}
            handleAnswer={handleAnswer}
            showNextButton={showNextButton}
            showPrevButton={showPrevButton}
            data={questions[currentIndex]}
            handlePreviousQuestion={handlePreviousQuestion}
          />
        )}
      </Wrapper>
    </Router>
  ) : (
    <h1> Loading.... </h1>
  );
}

const Wrapper = styled.div`
  background: white;
`;

const GameEndedContainer = styled.div`
  padding: 3em;
  background: white;
  display: flex;
  flex-direction: column;
  height: 50em;
  border-left: 4px solid #3b6978;
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: black;
  background-color: white;
  padding: 1em;
  color: #3b6978;
`;

const Text = styled.p`
  font-size: 1.8em;
  text-align: center;
  color: black;
  background-color: white;
  padding: 0.5em;
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
  margin-top: 3em;
  border: 1px solid silver;
  border-left: 4px solid #3b6978;
`;

export default App;
