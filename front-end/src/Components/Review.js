import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review(props) {
  const { review, handleSubmit } = props;
  const [viewEditForm, toggleEditForm] = useState(false);
  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };
  return (
    <div className="Review">
      <button onClick={toggleView}>edit this review</button>
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {review.title} <span>{review.rating}</span>
          </h4>

          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
        </div>
      )}
      <button onClick={() => props.handleDelete(review.id)}>delete</button>
    </div>
  );
}

export default Review;
