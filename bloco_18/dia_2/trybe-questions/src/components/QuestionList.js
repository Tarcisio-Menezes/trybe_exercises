import React, { useContext } from 'react';
import QuestionCard from './QuestionCard';

import QuestionContext from '../context/QuestionsContext';

function QuestionList() {
  const { questions } = useContext(QuestionContext);

  return (
    <section>
      {questions.map((question, index) => (
        <QuestionCard key={ index } question={ question } />))}
    </section>
  );
}

export default QuestionList;
