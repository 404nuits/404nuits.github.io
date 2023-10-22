const NoPage = () => {
    return (
      <div>
        <div className="row">
          <img src={process.env.PUBLIC_URL + "/images/dancing.gif"}/>
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