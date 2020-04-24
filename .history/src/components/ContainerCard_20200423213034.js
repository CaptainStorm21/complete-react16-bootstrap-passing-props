import React from "react";

function ContainerCard(props) {
  return (
    <div className="col-md-4 col-lg-4 py-2">
    <div className="card">
      <h5 className="card-header">{props.props.title}</h5>
      <div className="card-body">
        <p className="card-text">{this.props.description}</p>
      </div>
      <div className="card-footer">{this.props.author}</div>
    </div>
    </div>
  );
}

export default ContainerCard;
