import {
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  RadioGroup,
  SimpleGrid,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
// import quizimg from "../../public/assets/images/Q4T.png";

//   import { NextPageContext } from 'next';
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { questions } from "./quiz.json";
//   import { getSingleQuiz } from '../../../utils/db';
//   import { addAnswerApi } from '../../../utils/service';

const test1 = [
  {
    question: "What is the scientific name of a butterfly?",
    options: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
    correctIndex: 3,
  },
  {
    question: "How hot is the surface of the sun?",
    options: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
    correctIndex: 1,
  },
];

let singleQuiz = {
  title: "How hot is the surface of the sun?",
  options: [
    {
      optionId: 1,
      title: "1,233 K",
    },
    {
      optionId: 2,
      title: "5,778 K",
    },
    {
      optionId: 3,
      title: "12,130 K",
    },
    {
      optionId: 4,
      title: "101,300 K",
    },
  ],
};

const ShowQuiz = (quiz, onSubmit) => {
  return (
    <div className="bgcolor">
      <div className="card_center">
        <Container
          maxW="5xl"
          // mt={28}
          // mb={5}
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          boxShadow="xl"
          className="cardstyle"
        >
          <div>
            <Heading as="h2" className="headingtext">
              5/ Which of these sh*tposts was written by Elon?
            </Heading>
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px" mt={5}>
              <div className="centerimg redbox">
                <Box>
                  <Image
                    src="https://www.linkpicture.com/q/moon_1.jpg"
                    alt="quizimg"
                    className="quizstyle"
                  />
                </Box>
              </div>
              <div className="centerimg greenbox">
                <Box>
                  <Image
                    src="https://www.linkpicture.com/q/boa1.jpg"
                    alt="quizimg"
                    className="quizstyle"
                  />
                </Box>
              </div>
            </SimpleGrid>
            <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
              <div className="btnstyle">
                <Button colorScheme="blue">Next</Button>
              </div>
            </SimpleGrid>
          </div>
        </Container>
      </div>
    </div>
  );
};

const SingleQuiz = (props) => {
  const quiz = props.quiz;

  const onSubmit = async (values, actions) => {
    //   try {
    //     const resp = await addAnswerApi( props.quizId, values);
    //     const answerId = resp.data.data.answerId;
    //     router.push(`/quiz/${props.quizId}/answer/${answerId}`);
    //   } catch (error) {
    //     console.log('error', error);
    //   } finally {
    //     actions.setSubmitting(false);
    //   }
  };

  return <>{quiz && ShowQuiz(quiz, onSubmit)}</>;
};

export async function getServerSideProps() {
  const quizId = 1;
  const quizData = questions;
  return { props: { quiz: quizData, quizId } };
}

export default SingleQuiz;
