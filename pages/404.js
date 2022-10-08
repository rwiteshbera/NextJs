import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <h1>404 Not found</h1>
      <div>We are sorry. Page not found</div>
      <Link href="/">
        <a>Back To HomePage</a>
      </Link>
    </>
  );
};

export default ErrorPage;
