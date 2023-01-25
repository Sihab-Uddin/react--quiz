import Answers from "./Answers";

export default function Question() {
  return (
    <div className="question">
      <div className="qtitle">
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}
