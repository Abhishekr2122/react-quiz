import { Options } from "./Options";

export function Question({ question, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} />
    </div>
  );
}
