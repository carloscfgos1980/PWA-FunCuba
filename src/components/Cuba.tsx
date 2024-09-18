const cuba = ({ img, text }: any) => {
  return (
    <div className="py-3">
      <div className="row justify-content-around g-5">
        <img className="col-10 col-sm-5" width="30%" src={img} alt="havana" />
        <p className="col-10 col-sm-5 align-self-center lead">{text} </p>
      </div>
    </div>
  );
};

export default cuba;
