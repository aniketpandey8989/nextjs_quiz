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
  } from '@chakra-ui/react';
  import { Field, Form, Formik } from 'formik';
//   import { NextPageContext } from 'next';
  import { useRouter } from 'next/router';
  import React, { useEffect } from 'react';
  import {questions} from './quiz.json'
//   import { getSingleQuiz } from '../../../utils/db';
//   import { addAnswerApi } from '../../../utils/service';
  
const test1 = [
        {
        "question": "What is the scientific name of a butterfly?",
        "options": [
        "Apis",
        "Coleoptera",
        "Formicidae",
        "Rhopalocera"
        ],
        "correctIndex": 3
        },
        {
        "question": "How hot is the surface of the sun?",
        "options": [
        "1,233 K",
        "5,778 K",
        "12,130 K",
        "101,300 K"
        ],
        "correctIndex": 1
        },
]

let singleQuiz = {
    title : "How hot is the surface of the sun?",
    options: [ 
        {
            optionId : 1,
            title :  "1,233 K"
        },
        {
            optionId : 2,
            title :  "5,778 K"
        },
        {
            optionId : 3,
            title :  "12,130 K"
        },
        {
            optionId : 4,
            title :  "101,300 K"
        }
    ]
}

  const ShowQuiz = (quiz, onSubmit) => {
    return (
      <Container
        maxW="7xl"
        mt={5}
        mb={5}
        borderWidth="1px"
        borderRadius="lg"
        p={6}
        boxShadow="xl"
      >
        <Center flexDirection="column">
          <Heading>{"quiz title"}</Heading>
        </Center>
        <Text mt={4}>{"quiz description"}</Text>
        <Heading mt={4} size="lg">
          Questions:
        </Heading>
        <Divider
          mt={4}
          mb={4}
          css={{
            boxShadow: '1px 1px #888888',
          }}
        />
        <Formik initialValues={{}} onSubmit={onSubmit}>
          {(props) => (
            <Form>
              {/* {quiz.questions.map((singleQuiz, key) => ( */}
                <Field name={1} key={1}>
                  {({ field, _form }) => (
                    <FormControl
                      as="fieldset"
                      isRequired={true}
                      mb={{ base: 4, md: 0 }}
                    >
                      <FormLabel as="legend">{singleQuiz.title}</FormLabel>
                      <RadioGroup>
                        <SimpleGrid minChildWidth="120px" mb={2}>
                          {singleQuiz.options.map((option, subkey) => (
                            <HStack key={subkey}>
                              <Field
                                {...field}
                                type="radio"
                                name={1}
                                value={option.optionId}
                              />
                              <Text>{option.title}</Text>
                            </HStack>
                          ))}
                        </SimpleGrid>
                      </RadioGroup>
                    </FormControl>
                  )}
                </Field>
              {/* ))} */}
              <Center mt={10}>
                <Button
                  type="submit"
                  isLoading={props.isSubmitting}
                  colorScheme="green"
                >
                  Submit
                </Button>
              </Center>
            </Form>
          )}
        </Formik>
      </Container>
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
  
    return (
      <>
        {quiz && ShowQuiz(quiz, onSubmit)}
      </>
    );
  };
  
  export async function getServerSideProps() {
    const quizId = 1;
    const quizData = questions;
    return { props: { quiz: quizData, quizId } };
  }
  
  export default SingleQuiz;