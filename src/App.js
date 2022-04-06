import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "f2c7f318124baaaae69a67b4743fdef82e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticals, setNewsArticals] = useState([]);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticals(articles);
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <NewsCards articles={newsArticals} />
    </div>
  );
}

export default App;
