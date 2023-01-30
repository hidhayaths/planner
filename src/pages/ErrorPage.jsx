import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <p>404. Requested Resource is not available</p>
      <span>
        Click <Link to="/">here</Link> to go home page
      </span>
    </div>
  );
};

export default ErrorPage;
