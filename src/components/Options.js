export function Options({ question, dispatch }) {
  return (
    <div className="options">
      {question.options.map(function (option, index) {
        return (
          <button
            className="btn btn-option"
            key={option}
            onClick={function () {
              dispatch({ type: "newAnswer", payload: index });
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
