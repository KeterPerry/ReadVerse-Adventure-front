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

  const isEqual = () => {
    if (text === sentences) {
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
