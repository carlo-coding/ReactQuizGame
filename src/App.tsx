import React, { useState } from 'react';
import QuestionCard, { AnswerObject } from './components/QuestionCard';
import { DifficultyEnum, fetchQuestions, QuestionState } from './api';
import { GlobalStyles, Wrapper } from './App.styles';
const TOTAL_QUESTIONS = 10;


function App() {
  const [questions, setQuestions] = useState<QuestionState[]|null>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]|null>([]);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);

  const startTrivia = async (): Promise<void> => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, DifficultyEnum.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (gameOver) return;
    const answer: string = event.currentTarget.value;
    // Check answer against correct answer
    const correct: boolean = questions?.[number].correct_answer === answer;
    if (correct) setScore(prev=>prev+1);
    // Save answer in array
    const answerObj: AnswerObject = {
      correctAnswer: questions?.[number]?.correct_answer||"",
      question: questions?.[number]?.question||"",
      answer,
      correct
    }
    setUserAnswers(prev => [...(prev||[]), answerObj])
  }

  const nextQuestion = async (): Promise<void> => {
    const next_question = number + 1;
    if (next_question === TOTAL_QUESTIONS) {
      setGameOver(true);
    }else {
      setNumber(next_question);
    }
  }
  // RENDER RULES
  let showNextQuestionBtn: boolean = !gameOver&&!loading&&userAnswers?.length===number+1&&number!==TOTAL_QUESTIONS-1;
  let showStartBtn: boolean = (gameOver || userAnswers?.length === TOTAL_QUESTIONS);
  let showQuestionCard: boolean = (!loading&&!gameOver); 
  let showScore: boolean = !gameOver;
  let showLoading: boolean = loading;

  return <>
    <GlobalStyles />
    <Wrapper className='App'>
      <h1>React Quiz</h1>
      {showStartBtn&&(
        <button className="btn" onClick={startTrivia}>Start</button>
      )}
      {showScore&&(
        <p className="score">Score: {score}</p>
      )}
      {showLoading&&(
        <p className="loading">Loadin Questions...</p>
      )}
      {showQuestionCard&&(
        <QuestionCard 
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions?.[number]?.question}
          answers={questions?.[number]?.answers}
          userAnswer={userAnswers?.[number]||undefined}
          callback={checkAnswer}
        
        />
      )}
      {showNextQuestionBtn&&(
        <button className="btn" onClick={nextQuestion}>Next question</button>
      )}
    </Wrapper>
  </>;
}

export default App;
