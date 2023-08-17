import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="support">
          <div>الدعم الفني <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>مكتبه الشروحات <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>احدث المقالات <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>سياسه الخصوصيه <i class="fa-solid fa-arrows-turn-right"></i></div>
        </div>
        <div className="portfolio">
          <div>تصميم المواقع <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>برمجه التطبيقات <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>تهيئة محركات البحث <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>اداره اعلانات جوجل ادز <i class="fa-solid fa-arrows-turn-right"></i></div>
        </div>

        <div className="about">
          <div>الرئيسية <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>من نحن <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>اتصل بنا <i class="fa-solid fa-arrows-turn-right"></i></div>
          <div>سابقا الاعمال <i class="fa-solid fa-arrows-turn-right"></i> </div>
        </div>
        <div className="footer_logo">
          <img
            src="https://webcave.b-cdn.net/wp-content/uploads/2022/05/logo-webcave.png.webp"
            alt="logo"
          />
          <p>
            نحن شركة ويب كيف متخصصة التصميم وبرمجة المواقع وبرمجيات الاعمال و
            تصميمات السوشيل مديا و خدمات استضافة المواقع و الاميلات ونقدم خدمات
            الدعم الفني للشركات
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
