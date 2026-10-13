import React from "react";

function PageNotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>

      <button onClick={() => (window.location.href = "/")}>Go to Home</button>
    </div>
  );
}

export default PageNotFound;
