import { useRouteError } from "react-router-dom";
import './error.css'
export default function Error() {
  const error = useRouteError();

  return (
    <div class='error-container'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}