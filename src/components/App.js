import { useEffect } from "react";
import { useReducer } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { Question } from "./Question";
import { StartScreen } from "./StartScreen";

const initialState = {
  questions: [],

  // "loading" ,"error","ready","active","finished"
  status: "loading",
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      return { ...state, answer: action.payload };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;
  const numQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch(function (err) {
        dispatch({ type: "dataFailed" });
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <Question question={questions[index]} dispatch={dispatch} />
        )}
      </Main>
    </div>
  );
}
