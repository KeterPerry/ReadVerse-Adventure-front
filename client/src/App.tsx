import { useState } from "react";
import "./App.css";
import SpeechToText from "./component/speechToText";
// import Carousel from "react-elastic-carousel";

import Speech from "react-speech";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";

function App() {
  const [topic1] = useState<String>("At Home");
  const [sentences, setSentences] = useState<String>("");

  // const textstyle = {
  //   play: {
  //     hover: {
  //       backgroundColor: "black",
  //       color: "white",
  //     },
  //     button: {
  //       padding: "4",
  //       fontFamily: "Helvetica",
  //       fontSize: "1.0em",
  //       cursor: "pointer",
  //       pointerEvents: "none",
  //       outline: "none",
  //       backgroundColor: "inherit",
  //       border: "none",
  //     },
  //   },
  // };
  const handlePrompt = () => {
    const FetchTopicData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/chat/chatquestion",
          { topic1 }
        );
        console.log(response);
        setSentences(response.data);

        // const response = await axios.get("http://localhost:3001/chat/chattest");
        // console.log(response);
        // setResponse(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    FetchTopicData();
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Step 1: Please pick your avatar</h1>
      <Carousel className="carouselStyle">
        <div>
          <img src="assets/boy.jpeg" alt="boy" />
        </div>
        <div>
          <img src="assets/girl.jpeg" alt="girl" />
        </div>
        <div>
          <img src="assets/girl1.jpeg" alt="girl1" />
        </div>
      </Carousel>
      <div className="step2">
        <h1 className="">Step 2: Please pick a topic</h1>
        <div className="topics">
          <div onClick={handlePrompt}>
            <div>{topic1}</div>
          </div>
          <div>
            <div>At The resteraunt</div>
          </div>
          <div>
            <div>At The doctor's</div>
          </div>
        </div>
      </div>
      <div className="step3">
        <h1 className="">Step 3: Please pick a level</h1>
        <div className="levels">
          <div>Basic</div>
          <div>Beginner</div>
          <div>Advanced</div>
        </div>
      </div>

      {sentences ? (
        <div>
          <div className="step4">
            <h1>Things We Do {topic1}:</h1>
            <p>{sentences}</p>
          </div>
          <div>
            <div>
              <Speech
                // styles={textstyle}
                textAsButton={true}
                text={sentences}
                stop={true}
                voice="Google UK English Female"
              />
            </div>
          </div>
        </div>
      ) : null}
      <br></br>
      <br></br>
      <br></br>
      <div>
        <SpeechToText sentences={sentences} />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
