import Link from "next/link";

const index = () => {
  return (
    <>
      <nav>
        <ul
          className="menubar"
          style={{ display: "flex", listStyle: "none", margin: "10px 12px" }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/events">
            <a>Events</a>
          </Link>
          <Link href="/events">
            <a href="/courses">Courses</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default index;
