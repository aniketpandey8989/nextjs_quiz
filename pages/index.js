import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import quizData from "./quiz.json";
import ScoreCard from "./scoreCard";
const { questions } = quizData;

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittingAnswer, setSubmittingAnswer] = useState(false);
  const quiz = questions[questionNumber]; //gets single question from json

  //this function handles answer of a question
  const handleAnswer = (index) => {
    if (submittingAnswer) {
      return;
    }
    setSubmittingAnswer(true);
    setSelectedAnswer(index);
    //sets new score count if answer is right
    if (quiz.correctIndex === index) {
      setScore(score + 1);
    }
    //wait for two seconds to show right or wrong answer is given
    if (questionNumber <= questions.length - 1) {
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setSelectedAnswer(null);
        setSubmittingAnswer(false);
      }, 2000);
    }
  };

  //handles reseting quiz data to restart quiz
  const resetState = () => {
    setQuestionNumber(0);
    setScore(0);
    setSelectedAnswer(null);
    setSubmittingAnswer(false);
  };

  //renders UI
  return (
    <div className="bg-color">
      <div className="card-center">
        {questionNumber <= questions.length - 1 ? (
          <Container
            maxW="5xl"
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            boxShadow="xl"
            className="card-style container-size"
          >
            <div>
              <Heading className="heading-text">
                {`${questionNumber + 1}/15 ${quiz.question}`}
              </Heading>
              <SimpleGrid
                columns={2}
                spacingX="40px"
                spacingY="20px"
                mt={5}
              >
                {quiz.answers.map((dt, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={
                        quiz.correctIndex === index
                          ? "center-img "
                          : "center-img "
                      }
                    >
                      <Box>
                        <Image
                          src={dt.img}
                          alt="logo"
                        />
                        {selectedAnswer === index &&
                          selectedAnswer !== null && (
                            <>
                              {selectedAnswer === quiz.correctIndex ? (
                                <Image
                                  src="https://www.linkpicture.com/q/checked-1.png"
                                  alt="quizimg"
                                  className="check-right"
                                />
                              ) : (
                                <Image
                                  src="https://www.linkpicture.com/q/cancel-1.png"
                                  alt="quizimg"
                                  className="check-right"
                                />
                              )}
                            </>
                          )}
                      </Box>
                    </div>
                  );
                })}
              </SimpleGrid>
              <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
                <Heading
                  as="h3"
                  mt={10}
                  className="out-of-score"
                >{`Score: ${score}/15`}</Heading>
              </SimpleGrid>
            </div>
          </Container>
        ) : (
          <ScoreCard score={score} totalQuestions={questions.length} resetState={resetState} />
        )}
      </div>
    </div>
  );
};

export default Quiz;
