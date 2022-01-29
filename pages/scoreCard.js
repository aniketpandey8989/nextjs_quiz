import React from "react";
import {
    Box,
    Button,
    Container,
    Heading,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

const ScoreCard = ({ score, totalQuestions, resetState }) => {
    return (
        <Container
            maxW="5xl"
            borderWidth="1px"
            borderRadius="lg"
            p={6}
            boxShadow="xl"
            className="card-style">
            <div>
                <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
                    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        {" "}
                        <div className="vertical-center">
                            <Heading as="h2" className="your-score">
                                Your score: {score}/{totalQuestions} IMPRESSIVE!
                            </Heading>
                        </div>
                    </Box>
                    <Box>
                        <div className="">
                            <Heading as="h2" className="text-size">
                                Share your 💩 performance on Twitter!{" "}
                            </Heading>
                        </div>
                        <Box maxWidth={"25rem"} margin={"0 auto"}>
                            <Box className="score-card">
                                {" "}
                                <Image
                                    src="https://i.postimg.cc/jdFLNFt5/image-3-2-3.png"
                                    alt="quizimg"
                                />
                                <div className="score-text">
                                    I only recognized {score} out of my own{" "}
                                    {totalQuestions} sh*tposts. Damn.
                                </div>
                                <div className="">
                                    <Box display={"flex"} alignItems={"center"}>
                                        <div className="score-board-text">
                                            <div className="score-style">
                                                Score: {score}/{totalQuestions}
                                            </div>
                                            <div>
                                                Take the Elon Sh*tposts 💩 quiz and beat me!
                                            </div>
                                            <Box display={"flex"} justifyContent={"center"}>
                                                <Button
                                                    onClick={resetState}
                                                    className="quiz-me-btn"
                                                >
                                                    Quiz Me
                                                </Button>
                                            </Box>
                                        </div>

                                        <Image
                                            src="https://i.postimg.cc/zXpHN5vV/Group-519.png"
                                            alt="quizimg"
                                            maxWidth={"8rem"}
                                        />
                                    </Box>
                                </div>
                                <Image
                                    src="https://i.postimg.cc/Y0VM4TYB/image-3-2-1-1.png"
                                    alt="quizimg"
                                />
                            </Box>
                        </Box>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            className="btn-style"
                        >
                            <Link href="https://twitter.com/">
                                <Button colorScheme="blue" className="btn-color">
                                    Tweet My Score
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </SimpleGrid>
            </div>
        </Container>
    );
};

export default ScoreCard;
