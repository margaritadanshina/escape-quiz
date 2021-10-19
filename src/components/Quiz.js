// import logo from './logo.svg';
import React, { useState } from 'react';
import { Container } from './styled-components'

//let interval;

const Quiz = () => {

  const quiz = [
    {
      question: 'In which year did you escape?',
      answers: [
        {answer: '1997', id: 'NY', value: 1},
        {answer: '2013', id: 'LA', value: 1},
      ]
    },
    {
      question: 'What caused the root of all of the chaos?',
      answers: [
        {answer: 'An earthquake', id: 'LA', value: 1},
        {answer: 'World War 3', id: 'NY', value: 1},
      ]
    },
    {
      question: 'The president tries to stop an invasion from where?',
      answers: [
        {answer: 'Cuba', id: 'LA', value: 1},
        {answer: 'Soviet Union', id: 'NY', value: 1}
      ]
    },
    {
      question: 'Where was an island converted into a prison?',
      answers: [
        {answer: 'LA', id: 'LA', value: 1},
        {answer: 'Manhattan', id: 'NY', value: 1}
      ]
    },
    {
      question: 'Warning.. SPOILER ALERT: At the end of the movie, the main character Snake, does what?',
      answers: [
        {answer: 'Puffs a cigarette while going into the darkness', id: 'NY', value: 1},
        {answer: 'Picks a cigarette box labelled “American Spirit”', id: 'LA', value: 1},
      ]
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [scoreNY, setScoreNY] = useState(0);
  const [scoreLA, setScoreLA] = useState(0);


  const handleAnswerClick = (id) => {
    if (id === 'LA') {
      setScoreLA(scoreLA + 1);
    } else if (id === 'NY') {
      setScoreNY(scoreNY + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowMessage(true)
    }
  }


  return (
      <Container className="App">
            <Container className='answer-section'>
              {quiz[currentQuestion].answers.map((answer) => (
                <button onClick={() => handleAnswerClick(answer.id)}></button>
              ))}
            </Container>
      </Container>
  );
}


export default Quiz;