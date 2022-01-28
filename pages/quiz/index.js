import {
  Button,
  Container,
  Heading,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { questions } from "./quiz.json";

const ShowQuiz = (quiz, onSubmit, handleAnswer, handleNext,questionNumber) => {
  return (
    <div className="bgcolor">
      <div className="card_center">
        <Container
          maxW="5xl"
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          boxShadow="xl"
          className="cardstyle"
        >
          <div>
            <Heading as="h2" className="headingtext">
             {quiz.question}
            </Heading>
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px" mt={5}>
            {quiz.answers.map((dt,index) => {
             return <div key={index} onClick={() => handleAnswer(index)} className= {quiz.correctIndex === index ? "centerimg redbox" : "centerimg greenbox"}>
                <Box >
                  <Image
                    src={dt.img}
                    alt="logo"
                    className="quizstyle"
                  />
                  <Image
                    src="https://www.linkpicture.com/q/checked-1.png"
                    alt="quizimg"
                    className="checkright"
                  />
                   <Image
                    src="https://www.linkpicture.com/q/cancel-1.png"
                    alt="quizimg"
                    className="checkright"
                  />
                </Box>
              </div>
            })}
            </SimpleGrid>
            <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
              <div className="btnstyle">
              {questionNumber === questions.length-1 ? 
                <Button onClick={onSubmit} colorScheme="blue">Submit</Button>
                :
                <Button onClick={handleNext} colorScheme="blue">Next</Button>
              }
              </div>
            </SimpleGrid>
          </div>
        </Container>
      </div>
    </div>
  );
};

const SingleQuiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0)

  const quiz = questions[questionNumber];

  const onSubmit = async (values) => {
      try {
        console.log(values)
      } catch (error) {
        console.log('error', error);
      } finally {
        console.log("finally")
      }
  };

  const handleAnswer = (index) => {
    console.log("handleAnswer clicked",index)
  }

  const handleNext = () => {
    console.log("handle next clicked",questionNumber)
    if(questionNumber < questions.length -1){
      setQuestionNumber(questionNumber + 1)
    }
  }

  return <>{quiz && ShowQuiz(quiz, onSubmit, handleAnswer,handleNext,questionNumber)}</>;
};


export default SingleQuiz;
