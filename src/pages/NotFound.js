import "./notfound.css";
import { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1 className="mb-5">Oops!</h1>
            <br />
            <h2 className="mt-5">404 - The Page can't be found</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
