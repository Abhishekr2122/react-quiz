export function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) {
    return null;
  }

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={function () {
          dispatch({ type: "nextQuestion" });
        }}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={function () {
          dispatch({ type: "finish" });
        }}
      >
        Finish
      </button>
    );
  }
}
