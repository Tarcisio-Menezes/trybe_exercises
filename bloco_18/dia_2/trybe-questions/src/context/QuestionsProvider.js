import React, { useState } from 'react';
import { getQuestions } from '../services/api';

import QuestionContext from './QuestionsContext';

const QuestionsProvider = ({ children }) => {
  const [questions, setQuestion] = useState([]); // [state , setter]
  const [isLoading, setIsLoading] = useState(false);

  async function fetchQuestion() {
    // setar loading true
    // fazer a chamada da api
    // guardar os dados da api
    // setar loading false
    setIsLoading(true);
    const questionAPI = await getQuestions();
    setQuestion(questionAPI);
    setIsLoading(false);
  }

  return (
    <QuestionContext.Provider value={ { questions, isLoading, fetchQuestion } }>
      { children }
    </QuestionContext.Provider>
  );
};

export default QuestionsProvider;

// this.state = {
//   question: [],
//   isLoading: false,
// }

// this.setState({question: valor})
