import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";

const alanKey =
  "f2c7f318124baaaae69a67b4743fdef82e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
