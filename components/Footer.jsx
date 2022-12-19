import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const home = [
    ["เกี่ยวกับเรา", ""],
    ["คอร์สเรียน", ""],
    ["บทความ", ""],
    ["โปรโมชั่น", ""],
    ["ติดต่อเรา", ""],
    ["ข้อกำหนดการใช้บริการ", ""],
    ["นโยบายการสมัครลงทะเบียนและการยกเลิก", ""],
    ["นโยบายความเป็นส่วนตัว", ""],
  ];
  const courses = [
    ["คอร์สแนะนำ", ""],
    ["วัยเรียน", ""],
    ["วัยทำงาน", ""],
    ["องค์กร / หน่วยงาน", ""],
  ];
  const socials = [
    ["fa fa-facebook", ""],
    ["fa fa-youtube", ""],
    ["fa fa-line", ""],
  ];
  return (
    <footer className="container-fluid">
      <div className="row px-5 py-5">
        <div className="col-sm-12 col-md-3 d-flex">
          <Image
            src="/images/seac_logo.png"
            width={250}
            height={50}
            alt="SEAC Logo"
          />
        </div>
        <div className="col-sm-12 col-md-3">
          <h3>
            <Link href="/">HOME</Link>
          </h3>
          {home &&
            home.map(([title, url]) => {
              return (
                <li class="list-group-item" key={title}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
        </div>
        <div className="col-sm-12 col-md-3">
          <h3>
            <Link href="/courses">COURSES</Link>
          </h3>
          {courses &&
            courses.map(([title, url]) => {
              return (
                <li class="list-group-item" key={title}>
                  <Link href={url}>{title}</Link>
                </li>
              );
            })}
        </div>
        <div className="col-sm-12 col-md-3">
          <h3>
            <Link href="/courses">ADDRESS</Link>
          </h3>
          <p>
            FYI Center, อาคาร 2 ชั้น 2 ถนนพระรามที่ 4 อขวง ครองเตย เขตคลองเตย
            กรุงเทพมหานครฯ 10110
          </p>
          <p>โทร: (+66) 61 420 5959</p>
          <div className="row">
            {socials &&
              socials.map(([item, url]) => {
                if (item === "fa fa-line") {
                  return (
                    <>
                      <div
                        id={"icon"}
                        className="bg-black"
                        style={{
                          color: "#E4BF4B",
                          width: "14%",
                          borderRadius: "40px",
                          height: "45px",
                          padding: "10px 14px",
                          margin: "5px",
                        }}
                      >
                        <Link href={url} key={item}>
                          <Image
                            src="/images/line.png"
                            width={20}
                            height={20}
                            alt="SEAC Line OA"
                          />
                        </Link>
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div
                        id={"icon"}
                        className="bg-black"
                        style={{
                          color: "#E4BF4B",
                          width: "14%",
                          borderRadius: "40px",
                          height: "45px",
                          padding: "12px 18px",
                          margin: "5px",
                        }}
                      >
                        <Link href={url} key={item}>
                          <i class={item}></i>
                        </Link>
                      </div>
                    </>
                  );
                }
              })}
          </div>
        </div>
        <div className="col-sm-12 text-center pt-5">
          <span>
            <b>© Copyrights 2022 YourNextU All rights reserved</b>
          </span>
        </div>
      </div>
    </footer>
  );
}
