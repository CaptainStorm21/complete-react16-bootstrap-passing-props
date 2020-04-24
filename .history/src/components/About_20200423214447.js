import React from "react";

function About(props) {
  return (
    <div className="col-md-4 col-lg-4 py-2">
    <div className="card">
      <h5 className="card-header">Book Title: {props.title}</h5>
      <div className="card-body">
        <p className="card-text">{props.descripton}</p>
      </div>
      <div className="card-footer">Author: {props.author}</div>
    </div>
    </div>
  );
}

export default ContainerCard;
