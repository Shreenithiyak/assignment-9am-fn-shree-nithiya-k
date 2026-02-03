import { useState } from "react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <div>
      <h2>Feedback</h2>
      <textarea
        placeholder="Enter feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <p>Preview: {feedback}</p>
    </div>
  );
}
