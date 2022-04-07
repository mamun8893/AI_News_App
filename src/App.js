import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import "./style.css";

const alanKey =
  "f2c7f318124baaaae69a67b4743fdef82e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticals, setNewsArticals] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticals(articles);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <div className="m-logoContainer">
        <img
          src="https://www.fintechfutures.com/files/2017/11/AI-FOT-A.jpg"
          className="m-alanLogo"
          alt="logo"
        />
      </div>
      <NewsCards articles={newsArticals} activeArticle={activeArticle} />
    </div>
  );
}

export default App;
