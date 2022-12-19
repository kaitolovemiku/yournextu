/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
      <title>YournextU</title>
        <meta
          name="description"
          content="YourNextU แพลตฟอร์มการเรียนรู้ตอบโจทย์คนรุ่นใหม่ รับประกาศนียบัตรจากสถาบันระดับโลก การันตีความสนุกเข้มข้น จากจำนวนผู้เข้าเรียนเกือบหนึ่งเเสนคนภายในเวลาแค่ 1 ปี เปลี่ยนตัวเองเพื่ออนาคต คลังความรู้ไม่จำกัด YourNextU"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        />
      </Head>
      <Nav />
      <main className="px-4">
        {/* <div className="flex justify-center items-center bg-white mx-auto w-2/4 rounded-lg my-16 p-16">
          <div className="text-2xl font-medium">{children}</div>
        </div> */}
        <div className="text-2xl font-medium container">{children}</div>
      </main>
    </>
  );
};

export default Layout;