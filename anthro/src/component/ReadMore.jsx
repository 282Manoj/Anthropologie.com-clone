import React, { useState } from "react";

function ReadMore({ children }) {
  const [readMore, setReadmore] = useState(false);

  const handleReadMOre = () => {
    setReadmore(readMore ? false : true);
  };

  return (
    <>
      <p>{readMore ? children : children.substr(0, 431) + "..."}</p>
      <button onClick={handleReadMOre} style={{ cursor: "pointer" }}>
        {readMore ? "Read Less" : "Read More"}
      </button>
    </>
  );
}

export default ReadMore;
