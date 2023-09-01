import React, { useState, useEffect } from "react";
import "./Generator.css";

const Generator = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
    // Set up an interval to fetch a new quote every 10 seconds
    const intervalId = setInterval(fetchQuote, 20000);// 10000 milliseconds = 10 seconds

    // Clean up the interval when the component unmounts or when the effect is re-run
    return () => {
      clearInterval(intervalId);
    };

  }, []);// Empty dependency array to run the effect only once on mount

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
  
      if (data && data.content && data.author) {
        setQuote(data.content);
        setAuthor(data.author);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  


    return (
            <div id="quote-generator-container">
        <div id="quote-generator-div">
          <p id="quote">{quote}</p>
          <p id="author">{author}</p>
        </div>
        
        <div id="button" onClick={fetchQuote}></div>
  </div>
    )
}

export default Generator;

