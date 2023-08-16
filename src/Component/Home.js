import React from "react";
import "./Home.css";
import bg from "./imgs/Responsive-amico.svg";
function Home() {
  return (
    <section className="home_sec">
      <img className="bg" src={bg} alt="background" />
      <div className="text_parent">
        <div>
          <span className="T_span">"Web Cave"</span> هي مكانك نقدم لك موقع
          وتطبيق
        </div>
        <div>خبرة لأكثر من عشر سنوات في تصميم المواقع الإلكترونية </div>
        <p>خبرة لأكثر من عشر سنوات في تصميم المواقع الإلكترونية</p>
        <button className="home_btn">اطلب عرض مجاني الان</button>
        <img className="googleStar" src="https://webcave.b-cdn.net/wp-content/uploads/2021/11/Google-Reviews.png" alt="img" />
      </div>
    </section>
  );
}

export default Home;
