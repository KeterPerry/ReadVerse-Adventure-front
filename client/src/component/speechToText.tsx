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
    var newText = text.replace(punctuation, "");
    return newText;
  }

  const isEqual = () => {
    const newText = removePunctuation(text);
    const newSentences = removePunctuation(sentences);
    console.log({ newText, newSentences });
    if (newText && newSentences && newText === newSentences) {
      alert("You had a great job");
    }
    alert("Please try again");
  };
  return (
    <div>
      {hasRecognitionSupport ? (
        <>
          <div>
            <button onClick={startListening}>Start Listening</button>
          </div>
          <div>
            <button onClick={stopListening}>Stop Listening</button>
            {isListening === false ? (
              <button onClick={isEqual}>Check</button>
            ) : null}
          </div>
          <div>{text}</div>
        </>
      ) : (
        <h1>your browser..</h1>
      )}
    </div>
  );
};

export default SpeechToText;
