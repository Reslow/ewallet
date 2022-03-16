import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section>
      <h1>Whoops! someone took a wrong turn!</h1>
      <Link to="/">home</Link>
    </section>
  );
}
