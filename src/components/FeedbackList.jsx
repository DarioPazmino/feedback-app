import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleDelete }) => {
  if(!feedback || feedback.lenght === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className="feedback-list">
      {
        feedback.map(item => (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
      }
    </div>
  )
}

export default FeedbackList;