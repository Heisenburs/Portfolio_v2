import React from "react";
// import Logo from "../components/Logo";
import { useState, useEffect } from "react";
import Quote from "../components/Quote";
import "../styles/Home.css"

// import ResumeButton from "../components/ResumeButton";

function Homepage() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.kanye.rest/");

        const data = await response.json();
        console.log(data);
        setQuote(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {quote && <Quote quote={quote} />}

      {/* <ResumeButton /> */}

<div className="homeinfo">
  <h1>Hi! My Name is Jada</h1>
  <div className="prompt">
    A software developer with an eye for trends and a passion for creating the website you want. <em>Not something similar.</em> 
  </div>
</div>
    </div>
  );
}

export default Homepage;
