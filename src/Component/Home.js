import React from "react";
import "./Home.css";
import bg from "./imgs/Responsive-amico.svg";
import ScrollBtn from "./ScrollBtn";
function Home() {
  return (
    <>
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
          <img
            className="googleStar"
            src="https://webcave.b-cdn.net/wp-content/uploads/2021/11/Google-Reviews.png"
            alt="img"
          />
        </div>
      </section>
      <section className="home_sec2">
        <div className="sec2_title">
          <h1>شركة ويب كيف "Web Cave"</h1>
          <h2>
            مؤسسة متكاملة لتقديم الخدمات الرقمية وتصميم المواقع والتطبيقات
            للشركات والمؤسسات والهيئات والأفراد
          </h2>
          <button>المزيد من شركات الويب كيف </button>
        </div>
        <h2 className="title_child">خدماتنا المميزة</h2>

        <div className="cards_parent">
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/mobile-programming-apps-Webcave.png"
              alt="card"
            />
            <h1>تصميم تطبيقات الجوال</h1>
            <p>
              إطلاق وتنفيذ وتصميم وبرمجة كافة أنواع التطبيقات المستخدمة على
              الهاتف الجوال سواء كان “Andorid or IOS” ليتناسب مع الغرض والهدف
              المقصود
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/Ecommerce-Website-Design-Webcave.png"
              alt="card"
            />
            <h1>إنشاء المتاجر الإلكترونية</h1>
            <p>
              تصميم متجر متجاوب مع الأجهزة ومراعاة ضبط محرك البحث “SEO” والكلمات
              المفتاحية ومنصات الدفع الإلكتروني التي تجعلك أقرب للعميل
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/web-design-company-Webcave.png"
              alt="card"
            />
            <h1>تصميم المدونات</h1>
            <p>
              تصميم المدونات الشخصية والمواقع المتجاوبة للمؤثرين والعاملين في
              مجال صناعة المحتوى بغرض إظهار الهوية بطريقة أكثر احترافية
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/Digital-marketing-Webcave.png"
              alt="card"
            />
            <h1>التسويق الرقمي</h1>
            <p>
              نقوم بتوفير خدمات إدارة الصفحات والحملات التسويقية الإعلانية
              الممولة ونضمن الوصول الصحيح للعميل وجذب عملاء جدد وبناء ولاء
              العميل الحالي
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/hosting-Webcave.png"
              alt="card"
            />
            <h1>خدمات الاستضافة</h1>
            <p>
              نقدم خدمات استضافة المواقع الكبيرة والعملاقة مع توفير عامل الأمن
              والحماية العالية ضد الإختراق والترصد ورفع سرعة التصفح في موقعك
              باسعار مناسبة.
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/Software-for-companies-Webcave-1.png"
              alt="card"
            />
            <h1>تصميم مواقع الشركات</h1>
            <p>
              نتفهم طبيعة عملك ونشاط شركتك ونعمل على إنشاء موقع شركتك ليجعلك
              أقرب إلى العملاء معبرا عن علامتك التجارية وخدماتك ومنتجاتك
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/Video-motion-graphics.png"
              alt="card"
            />
            <h1>فيديو موشن جرافيك</h1>
            <p>
              فيديو الموشن جرافيك بقوة سحرية تحول أي فكرة مهما بدت صعبة أو مملة
              إلى رسوم متحركة جذابة
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/Administration-digital-content.png"
              alt="card"
            />
            <h1> ادارة المحتوى الرقمي </h1>
            <p>
              لدينا فريق متخصص فى ادارة وكتابة المحتوي متوافق مع محركات البحث
            </p>
          </div>
          <div className="card">
            <img
              className="cardImg"
              src="https://webcave.b-cdn.net/wp-content/uploads/2022/02/design-business-identity-Webcave.png"
              alt="card"
            />
            <h1> تصميم الهوية التجارية </h1>
            <p>
              يمكنك امتلاك هوية تجارية كاملة ومميزة حيث تختص الشركة بتقديم
              العديد من الأفكار التي تخدم العلامة التجارية للعميل .
            </p>
          </div>
        </div>
      </section>
      <section className="home_sec3">
        <div className="home_sec3_title">
          <h1 style={{ color: "#0c356a", fontWeight: "bold" }} dir="rtl">
            لماذا ويب كيف هي الأنسب لك؟
          </h1>
          <li dir="rtl">
            لدينا فريق مخصص للتعامل مع العملاء وفهم متطلباته وتحديد أهدافه
          </li>
          <li dir="rtl">
            لدينا كثر من الحلول ولا نكتفي بعرض واحد لتحقيق أهداف العميل ورؤيته
          </li>
          <li dir="rtl">
            نضع خطة زمنية محددة وجدول مفصل ونقدم للعميل تقارير دورية بما تم
          </li>
          <li dir="rtl">
            نحرص على الموضوعية وضمان المصداقية والإلتزام والدقة في التنفيذ
          </li>
          <li dir="rtl">
            سياسة تسعير واضحة مما يضمن أفضل سعر وتحقيق الجودة المطلوبة
          </li>
        </div>
        <div className="contactUsNow_parent">
          <button className="contactUsNow">تواصل معنا الان</button>
          <button>اكتشف مجموعتنا الكامله من خدمات التسويق الرقمي</button>
        </div>
        <ScrollBtn/>
      </section>
    </>
  );
}

export default Home;
