export function NextButton({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }
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
