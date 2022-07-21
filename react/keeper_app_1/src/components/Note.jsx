import React from "react";
import ReactDOM from "react-dom";

function Note() {
  const noteTitle = "Job Interview";
  const noteContent = "Next Friday at 9 am.";

  return (
    <div className="note">
      <h1>{noteTitle}</h1>
      <p>{noteContent}</p>
    </div>
  );
}

export default Note;
