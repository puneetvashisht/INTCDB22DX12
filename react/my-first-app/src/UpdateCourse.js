import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateCourse() {
  let params = useParams();

  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="floatingInput">Enter Title</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label htmlFor="floatingPassword">Enter Summary</label>
      </div>
      <button className="btn btn-primary mb-5">Add Course</button>
    </div>
  );
}
