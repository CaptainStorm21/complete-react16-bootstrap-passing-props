import React from "react";

function ContainerCard() {
  return (
    <div className="col-md-4 col-lg-4 py-2">
    <div className="card">
      <h5 className="card-header">{this.props.title}</h5>
      <div className="card-body">
        <p className="card-text">{this.props.t}</p>
      </div>
      <div className="card-footer">Card footer</div>
    </div>
    </div>
  );
}

export default ContainerCard;
