/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import GetScreenSize from "../lib/getScreenSize";
import mainColor from "../lib/mainColor";
import Carousel from "../components/Carousel";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const size = GetScreenSize();
  return (
    <>
      <Head>
        <title>YourNextU</title>
        <meta
          name="description"
          content="YourNextU แพลตฟอร์มการเรียนรู้ตอบโจทย์คนรุ่นใหม่ รับประกาศนียบัตรจากสถาบันระดับโลก การันตีความสนุกเข้มข้น จากจำนวนผู้เข้าเรียนเกือบหนึ่งเเสนคนภายในเวลาแค่ 1 ปี เปลี่ยนตัวเองเพื่ออนาคต คลังความรู้ไม่จำกัด YourNextU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@200;300;400;600&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/cropped-fav.png" />
      </Head>
      <main className={styles.main}>
        <section id="section1" className={styles.section1}>
          <p>
            เบื้องหลัง
            <br />
            ความสำเร็จ
            <br />
            คือ ทักษะ
            <br />
            การใช้ชีวิตที่ดี
          </p>
          <Image
            className={styles.bannerImage}
            src="/images/happy.png"
            alt="Vercel Logo"
            width={size.width / 1.5}
            height={size.width / 1.4}
          />
          <div className={styles.mainText}>
            <h1>YourNextU</h1>
            <h2>School of Life</h2>
            <h3>ศูนย์รวมวิชาชีวิต</h3>
          </div>
        </section>

        <section id="section2">
          <Carousel />
        </section>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs"
            className={styles.card}
            style={{ backgroundColor: mainColor.darkOrange }}
          >
            <h2>
              สร้างทักษะที่จะเปลี่ยนชีวิตของคุณให้ดีขึ้นในทุกๆด้าน
              ไม่ว่าจะเป็นการงาน หรือชีวิตส่วนตัว &rarr;
            </h2>
          </a>

          <a
            href="https://nextjs.org/learn"
            className={styles.card}
            style={{ backgroundColor: mainColor.darkRed }}
          >
            <h2>วางแผนชีวิต &rarr;</h2>
            <p>ปักหมุดให้ตรงเป๊ะ แล้วพุ่งตรงไปสู่จุดหมายแบบไม่หลงทาง</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
            style={{ backgroundColor: mainColor.blue }}
          >
            <h2>หาโอกาส &rarr;</h2>
            <p>
              เติบโตเร็วกว่าใคร ด้วยหูตาที่ว่องไว และหัวใจที่ไม่หยุดเรียนรู้
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ backgroundColor: mainColor.darkOrange }}
          >
            <h2>สร้างผลงาน &rarr;</h2>
            <p>
              เปลี่ยนคุณเป็นคน “รักงาน” ยิ่งทำ ยิ่งสนุก ยิ่งลงแรง
              ยิ่งเห็นผลตอบแทน
            </p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            style={{ backgroundColor: mainColor.green, width: "100%" }}
          >
            <h2>ทำฝันให้เป็นจริง &rarr;</h2>
            <p>ติดอาวุธครบครันทั้งศาสตร์ และศิลป์ ฝันจะไกลแค่ไหนก็ไปถึง</p>
          </a>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      </main>
    </>
  );
}
