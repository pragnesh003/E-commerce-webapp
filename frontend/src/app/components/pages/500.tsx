import React from 'react';
import { ReactComponent as IconBugFill } from "bootstrap-icons/icons/bug-fill.svg";

const InternalServerErrorView = () => {
  return (
    <div className="container text-center p-5">
      <div className="display-1">
        <IconBugFill className="i-va text-warning" width={80} height={80} />
        500
      </div>
      <h1 className="mb-3">Internal Server Error</h1>
    </div>
  )
}

export default InternalServerErrorView