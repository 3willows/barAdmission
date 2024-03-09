// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // Hash Router is not a data router

  // const error = useRouteError();
  // console.error(error);

  return (
    <div className="m-4">
      <article className="m-5 text-center">
        <p className="m-5 text-center">Oops</p>
        <p className="m-5 text-center">
          Sorry, an unexpected error has occurred.
        </p>
      </article>
    </div>
  );
}
