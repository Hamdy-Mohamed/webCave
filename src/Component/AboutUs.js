import React from "react";
import "./AboutUs.css";
import secoundAboutSecImg from "./imgs/Few.png";
import ScrollBtn from "./ScrollBtn";

function AboutUs() {
  return (
    <>
      <div className="first_sec">
        من نحن
        <div>webCave</div>
        <p className="pragraph">
          تُعد شركة ويب كيبف من أفضل الشركات المتخصصة في مجال تصميم وتطوير
          المواقع في مصر والخليج حيث لدينا خبرات في مجال البرمجة والتصميم
          والسيرفرات وبرمجة التطبيقات
        </p>
      </div>
      <section className="aboutUsSec">
        <div className="aboutUsSecDiv">
          تعرف على شركة ويف كييف
          <p className="aboutUsSecP">
            تأسست شركة ويب كيف 2018 على يد متخصصون فى مجال تصميم المواقع
            والبرمجة، ونفتخر ان نكون شركة مصرية تعمل فى سوق تكنولوجيا المعلومات
            و مجال تصميم المواقع وبرمجة التطبيقات ولدينا سابقة اعمال فى السوق
            المحلي والعربي والدولي يضم فريق عمل ويب كييف عدد كبير من المبرمجين
            والمصممين و المسوقيين وهم لديهم خبرة كبيرة كافية في تصميم وتطوير
            مواقع الانترنت،ولدينا خبرة كبيرة فى كافة المجالات مثل التجارة
            الاكترونية,الشركات الكبيرة والصغيرة,المؤؤسات,المدارس,التعليم
            الاكتروني,الاستيراد والتصدير و والتوريدات وغيرها من القطعات
          </p>
        </div>
        <img
          className="aboutUsSecImg"
          src="https://webcave.b-cdn.net/wp-content/uploads/2021/09/company-1-1024x506.png"
          alt="world img"
        />
        <div className="iconsParent">
          <div className="IconWithText">
            <i class="fa-solid fa-graduation-cap"></i>
            <h1>
              أهدافنا
              <p>
                اهدافنا فى ويب كيف ان نحظى بثقة عملائنا من خلال رضاهم عن خدماتنا
              </p>
            </h1>
          </div>
          <div className="IconWithText">
            <i class="fa-regular fa-newspaper"></i>
            <h1>
              رسالتنا
              <p>
                تنفيذ المشروعات البرمجية الممنهجة وحسب تطورات السوق العالمي
                العميل في موقع العميل أو التسويق الاكتروني
              </p>
            </h1>
          </div>
          <div className="IconWithText">
            <i class="fa-solid fa-eye"></i>
            <h1>
              رؤيتنا
              <p>
                هي توفير خدمات احترافية والعمل على التطوير المستمر في قدراتنا
              </p>
            </h1>
          </div>
        </div>
      </section>

      <section className="secoundAboutSec">
        <img
          className="secoundAboutSecImg"
          src={secoundAboutSecImg}
          alt="pic"
        />
        <h2 className="secoundAboutSecTitle">
          هل تبحث عن وكالة يمكنها مساعدتك في تحقيق أهداف النمو الطموحة؟
          <p className="secoundAboutSecPara">
            نحصل على نتائج باستخدا م التسويق الرقمي الذي تم تجربته واختباره
            بنجاح. الحملات التسويقية هي وحوش معقدة. هذا هو المكان الذي نأتي
            إليه. يقوم فريق الخبراء لدينا بوضع استراتيجيات تسويق رقمية مخصصة
            لكسب العملاء المحتملين وتحقيق المبيعات.
          </p>
          <button className="secoundAboutSecBtn">
            اطلب عرض مجاني حول خدمات ويب كيف
          </button>
        </h2>
      </section>
      <ScrollBtn />
    </>
  );
}

export default AboutUs;
