import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import quizData from "./quiz.json";
const { questions } = quizData;

const SingleQuiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [submittingAnswer, setSubmittingAnswer] = useState(false);
  const quiz = questions[questionNumber];

  const handleAnswer = (index) => {
    if (submittingAnswer) {
      return;
    }
    setSubmittingAnswer(true);
    setSelectedAnswer(index);
    if (quiz.correctIndex === index) {
      setScore(score + 1);
    }

    if (questionNumber <= questions.length - 1) {
      setTimeout(() => {
        setQuestionNumber(questionNumber + 1);
        setSelectedAnswer(null);
        setSubmittingAnswer(false);
      }, 2000);
    }
  };

  const resetState = () => {
    setQuestionNumber(0);
    setScore(0);
    setSelectedAnswer(null);
    setSubmittingAnswer(false);
  };

  return (
    <>
      {
        <div className="bgcolor">
          <div className="card_center">
            {questionNumber <= questions.length - 1 ? (
              <Container
                maxW="5xl"
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                boxShadow="xl"
                className="cardstyle containersize"
              >
                <div>
                  <Heading className="headingtext">
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
                              ? "centerimg redbox"
                              : "centerimg greenbox"
                          }
                        >
                          <Box>
                            <Image
                              src={dt.img}
                              alt="logo"
                              className="quizstyle"
                            />
                            {selectedAnswer === index &&
                              selectedAnswer !== null && (
                                <>
                                  {selectedAnswer === quiz.correctIndex ? (
                                    <Image
                                      src="https://www.linkpicture.com/q/checked-1.png"
                                      alt="quizimg"
                                      className="checkright"
                                    />
                                  ) : (
                                    <Image
                                      src="https://www.linkpicture.com/q/cancel-1.png"
                                      alt="quizimg"
                                      className="checkright"
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
                      className="outofscore"
                    >{`Score: ${score}/15`}</Heading>
                  </SimpleGrid>
                </div>
              </Container>
            ) : (
              <Container
                maxW="5xl"
                borderWidth="1px"
                borderRadius="lg"
                p={6}
                boxShadow="xl"
                className="cardstyle">
                <div>
                  <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                      {" "}
                      <div className="verticalcenter">
                        <Heading as="h2" className="textleft">
                          Your score: {score}/{questions.length} IMPRESSIVE!
                        </Heading>
                      </div>
                    </Box>
                    <Box>
                      <div className="">
                        <Heading as="h2" className="textsize">
                          Share your 💩 performance on Twitter!{" "}
                        </Heading>
                      </div>
                      <Box maxWidth={"25rem"} margin={"0 auto"}>
                        <Box className="scoreCard">
                          {" "}
                          <Image
                            src="https://i.postimg.cc/jdFLNFt5/image-3-2-3.png"
                            alt="quizimg"
                            className="crrdtopimg"
                          />
                          <div className="scoretext">
                            I only recognized {score} out of my own{" "}
                            {questions.length} sh*tposts. Damn.
                          </div>
                          <div className="boxborder">
                            <Box display={"flex"} alignItems={"center"}>
                              <div className="scoreBoardText">
                                <div className="scorestyle">
                                  Score: {score}/{questions.length}
                                </div>
                                <div>
                                  Take the Elon Sh*tposts 💩 quiz and beat me!
                                </div>
                                <Box display={"flex"} justifyContent={"center"}>
                                  <Button
                                    onClick={resetState}
                                    className="btncolor quizMeBtn"
                                  >
                                    Quiz Me
                                  </Button>
                                </Box>
                              </div>

                              <Image
                                src="https://i.postimg.cc/zXpHN5vV/Group-519.png"
                                alt="quizimg"
                                className="quizstyle"
                                maxWidth={"8rem"}
                              />
                            </Box>
                          </div>
                          <Image
                            src="https://i.postimg.cc/Y0VM4TYB/image-3-2-1-1.png"
                            alt="quizimg"
                            className="quizstyle"
                          />
                        </Box>
                      </Box>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        className="btnstyle"
                      >
                        <Link href="https://twitter.com/">
                          <Button colorScheme="blue" className="btncolor">
                            Tweet My Score
                          </Button>
                        </Link>
                      </Box>
                    </Box>
                  </SimpleGrid>
                </div>
              </Container>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default SingleQuiz;
