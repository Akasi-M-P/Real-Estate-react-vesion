import React from "react";

const Homes = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 our">
            <p className="h2 text-center">OUR HOMES</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row homes">
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/appm.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center description-head">
                  APPARTMENTS
                </h5>
                <p className="card-text description">
                  Warm apartment ideal for business trip, families or couple.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/bung.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center description-head">
                  BUNGALOWS
                </h5>
                <p className="card-text description">
                  {" "}
                  Discover a mix of modernity and history in this characteristic
                  Bungalows.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/twn.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center description-head">
                  TOWNHOUSES
                </h5>
                <p className="card-text description">
                  {" "}
                  Newly renovated design townhouses with a romantic garden
                  terrace situated in one of the most popular and coolest
                  neighborhood.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/villa.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center description-head">
                  VILLAS
                </h5>
                <p className="card-text description">
                  This Villa is designed in a Modern and Practical elements
                  which provides maximum comfort and the best experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
