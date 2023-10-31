function Question({ question }) {
  function decodeHTMLEntities(text) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }
  const questionDecoded = decodeHTMLEntities(question.question);
  let answers = [...question.incorrect_answers, question.correct_answer];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffleanser = shuffleArray(answers);

  return (
    <div>
      <p>{questionDecoded}</p>
      <ul>
        {shuffleanser.map((ans) => {
          return <li key={ans}>{ans}</li>;
        })}
      </ul>
    </div>
  );
}

export default Question;
