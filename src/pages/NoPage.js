import dancingImage from "../images/dancing.gif";

const NoPage = () => {
  return (
    <div>
      <div className="row">
        <img alt="dancing" src={dancingImage} />
      </div>
      <div className="row">
        <h1>404</h1>
      </div>
      <div className="row">
        <h3>Go out and dance</h3>
      </div>
    </div>
  );
};

export default NoPage;
