import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

type Props = {
  sentences: String;
};
const SpeechToText: React.FC<Props> = ({ sentences }) => {
  const {
    text,
    isListening,
    startListening,
    stopListening,
    hasRecognitionSupport,
  } = useSpeechRecognition();

  function removePunctuation(txt: any) {
    var punctuation = /[.,?!\n]/g;
    var newText = txt.replace(punctuation, "");
    return newText;
  }

  const isEqual = () => {
    const newText = removePunctuation(text.toLocaleLowerCase());
    const newSentences = removePunctuation(sentences.toLocaleLowerCase());
    console.log({ newText, newSentences });
    if (newText && newSentences && newText === newSentences) {
      alert("You had a great job");
    } else {
      alert("Please try again");
    }
  };
  return (
    <div>
      {hasRecognitionSupport ? (
        <div className="speechBtn">
          <div>
            <button onClick={startListening}>Start Listening</button>
          </div>
          <div>
            <button onClick={stopListening}>Stop Listening</button>
          </div>
          <div>
            {isListening === false ? (
              <button onClick={isEqual}>Check</button>
            ) : null}
          </div>
          <br></br>
          <div className="text">{text}</div>
        </div>
      ) : (
        <h1>your browser..</h1>
      )}
    </div>
  );
};

export default SpeechToText;
