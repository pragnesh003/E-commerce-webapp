import React from "react";
import { ReactComponent as IconAlertTriangleFill } from "bootstrap-icons/icons/exclamation-triangle-fill.svg";

const NotFoundView = () => {
  return (
    <div className="container text-center p-5">
      <div className="display-1">
        <IconAlertTriangleFill className="i-va text-warning" width={80} height={80} />
        404
      </div>
      <h1 className="mb-3">Oops... Page Not Found!</h1>
    </div>
  );
}

export default NotFoundView