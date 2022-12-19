import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Nav = () => {
  const routes = [
    ["YourNextU", "/"],
    ["เกี่ยวกับเรา", "/เกี่ยวกับเรา"],
    ["หลักสูตร", "/หลักสูตร"],
    ["สาระความรู้", "/สาระความรู้"],
    ["โปรโมชั่น", "/โปรโมชั่น"],
    ["ติดต่อเรา", "/ติดต่อเรา"],
    ["เข้าสู่ห้องเรียน", "/เข้าสู่ห้องเรียน"],
  ];
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-lg">
      <div className="container px-5">
        <Link href="/" passHref className="navbar-brand">
          <Image
            className=""
            src="/images/logo.png"
            width={92}
            height={100}
            alt="YourNextU Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routes &&
              routes.map(([title, url]) => {
                if (title === "YourNextU") {
                  return (
                    <li key={title} className="nav-item">
                      <Link
                        href={url}
                        key={title}
                        className="nav-link text-underline-hover active"
                        aria-current="page"
                      >
                        <b>{title}</b>
                      </Link>
                    </li>
                  );
                } else if (title === "หลักสูตร") {
                  return (
                    <li className="nav-item dropdown" key={title}>
                      <Link
                        className="nav-link dropdown-toggle text-underline-hover"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {title}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        style={{ backgroundColor: "#e4be4b" }}
                      >
                        <li>
                          <a className="dropdown-item" href="/student">
                            วัยเรียน
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/professional">
                            วัยทำงาน
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/enterprise">
                            องค์กร / หน่วยงาน
                          </a>
                        </li>
                      </ul>
                    </li>
                  );
                } else if (title === "สาระความรู้") {
                  return (
                    <li
                      className="nav-item text-underline-hover dropdown"
                      key={title}
                    >
                      <Link
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {title}
                      </Link>
                      <ul
                        className="dropdown-menu"
                        style={{ backgroundColor: "#e4be4b" }}
                      >
                        <li>
                          <Link
                            className="dropdown-item text-underline-hover"
                            href="/category/blog"
                          >
                            บทความ
                          </Link>
                        </li>
                      </ul>
                    </li>
                  );
                } else if (title === "เข้าสู่ห้องเรียน") {
                  return (
                    <li
                      className="nav-item"
                      key={title}
                      style={{
                        backgroundColor: "#e4be4b",
                        borderRadius: "20px",
                        padding: "0px 10px",
                        margin: "0px 10px",
                      }}
                    >
                      <Link className="nav-link text-underline-hover" href={url}>
                        <b>{title}</b>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item text-underline-hover" key={title}>
                      <Link className="nav-link text-underline-hover" href={url}>
                        <b>{title}</b>
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
          <form className={styles.search_form} role="search">
            <input
              className={styles.search_field}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className={styles.search_submit} type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
