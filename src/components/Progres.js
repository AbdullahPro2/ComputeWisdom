function Progres({ numQuestions, answer, index }) {
  console.log("Progess num:", answer);
  return (
    <div className="progress">
      <progress max={numQuestions.length} value={index + answer}></progress>
      <p className="progess-status">
        {index + 1}/{numQuestions.length}
      </p>
    </div>
  );
}

export default Progres;
