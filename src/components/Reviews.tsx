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
    <div className="align-items-stretch">
      <h3 className="text-center">{stars(feedback.score)}</h3>
      <p style={{ height: "100px" }}>{feedback.comment}</p>
      <div className="mt-4">
        <span>{`${feedback.author} (${feedback.country})`}</span>
      </div>
    </div>
  );
};

export default reviews;
