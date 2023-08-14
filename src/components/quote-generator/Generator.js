import React, { useState, useEffect } from "react";
import "./Generator.css";

const Generator = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

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

