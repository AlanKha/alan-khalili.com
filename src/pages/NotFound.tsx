import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

/**
 * A 404 page for when a route is not found.
 */
export default function NotFound() {
  return (
    <div className="px-8 lg:px-36 flex justify-center  text-center flex-col items-center min-h-screen">
      <h1 className="text-6xl leading-snug font-bold pb-4">
        <RoughNotation
          type="underline"
          show={true}
          animationDelay={500}
          color="var(--color-custom-ivory)"
          strokeWidth={3}
          multiline={true}
        >
          404 - Not Found
        </RoughNotation>
      </h1>
      <p className="text-xl leading-loose">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="underline mt-4">
        Go back to the homepage
      </Link>
    </div>
  );
}
