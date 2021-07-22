import React from 'react';

import QuestionList from '../components/QuestionList';

import QuestionContext from '../context/QuestionsContext';

class QuestionListPage extends React.Component {
  componentDidMount() {
    const { fetchQuestion } = this.context;
    fetchQuestion();
  }

  render() {
    const { history } = this.props;
    const { isLoading } = this.context;
    return !isLoading ? (
      <>
        <QuestionList />
        <button
          type="button"
          onClick={ () => history.push('/new-question') }
        >
          Nova Pergunta
        </button>
      </>
    ) : <span>Carregando...</span>;
  }
}

QuestionListPage.contextType = QuestionContext;

export default QuestionListPage;
