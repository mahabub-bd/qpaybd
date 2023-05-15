import Link from "next/link";

const Custom404 = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to home</Link>
      </div>
    </div>
  );
};

export default Custom404;
