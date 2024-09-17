const reviews = ({ feedback }: any) => {
  const stars = (points: number) => {
    if (points === 1) {
      return "⭐";
    } else if (points === 2) {
      return "⭐ ⭐";
    } else if (points === 3) {
      return "⭐ ⭐ ⭐";
    } else if (points === 4) {
      return "⭐ ⭐ ⭐ ⭐";
    } else {
      return "⭐ ⭐ ⭐ ⭐ ⭐";
    }
  };
  return (
    <div>
      <h3 className="text-center">{stars(feedback.score)}</h3>
      <p>{feedback.comment}</p>
      <span>{`${feedback.author} (${feedback.country})`}</span>
    </div>
  );
};

export default reviews;
