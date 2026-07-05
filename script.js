// ===== Translations =====
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "عنّا",
    nav_articles: "مقالات",
    nav_gallery: "صور",
    nav_join: "انضم إلينا",

    hero_eyebrow: "مبادرة معبر",
    hero_title: "طرق أخرى للعيش",
    hero_sub: "معبر مكان نجمع فيه قصص وتجارب أشخاص اختاروا يعيشون بعيد عن صخب المدينة، عشان نتعرف مع بعض على طرق عيش غير الطريق المعتاد.",
    hero_cta: "انضم لنشرتنا",
    hero_cta2: "تعرّف علينا",

    about_tag: "من نحن",
    about_title: "قصتنا",
    about_text: "بدأت معبر من سؤال كنا نسأله لأنفسنا كثير: ليش لازم نعيش في المدينة؟ اكتشفنا إن فيه أشخاص جربوا طرق مختلفة، عاشوا في القرى والمزارع والصحاري، وبنوا لأنفسهم حياة أبسط وأقرب للأرض والناس. الحين رايحين نجمع قصصهم، نقابلهم، ونتناقش معهم عن التحديات اللي تمنع أكثرنا من يجرب اللي جربوه، عشان نشارك كل هذا مع كل شخص يحس إنه يبحث عن شي مختلف.",

    pillar1_title: "مقالات",
    pillar1_text: "نكتب عن تجارب وأنظمة عيش بعيدة عن المدينة.",
    pillar2_title: "مقابلات",
    pillar2_text: "نتكلم مع أشخاص عاشوا التجربة بنفسهم.",
    pillar3_title: "دراسات",
    pillar3_text: "نقرأ ونلخّص لك نماذج عيش مستدامة من حول العالم.",
    pillar4_title: "لقاءات",
    pillar4_text: "نجتمع ونتناقش وجهًا لوجه مع المهتمين والممارسين.",

    articles_tag: "قريبًا",
    articles_title: "مقالات ولقاءات",
    coming_soon_text: "أول المقالات والمقابلات في الطريق. تابعنا في نشرتنا عشان تكون أول من يقرأها.",
    coming_soon_cta: "انضم لنشرتنا",

    gallery_tag: "لحظات من معبر",
    gallery_title: "معرض الصور",

    join_tag: "عضوية معبر",
    join_title: "انضم إلينا",
    join_text: "سجّل بريدك عشان توصلك آخر المقالات والفعاليات والدعوات الخاصة بمبادرة معبر.",
    form_name: "الاسم",
    form_email: "البريد الإلكتروني",
    form_submit: "سجّل الآن",
    form_note: "سنستخدم بريدك فقط لإرسال آخر أخبار وفعاليات معبر.",

    footer_tagline: "مبادرة معبر",
    footer_copy: "© 2026 معبر. جميع الحقوق محفوظة.",

    form_success: "تم التسجيل بنجاح! تحقق من بريدك.",
    form_error: "حدث خطأ. تأكد من ربط نموذج Formspree (راجع ملف README)."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_articles: "Articles",
    nav_gallery: "Gallery",
    nav_join: "Join Us",

    hero_eyebrow: "The Mabr Initiative",
    hero_title: "Other Ways to Live",
    hero_sub: "Mabr is a place where we gather stories and experiences of people who chose to live far from the noise of the city, so we can discover together other ways of living.",
    hero_cta: "Join Our Newsletter",
    hero_cta2: "Learn About Us",

    about_tag: "Who We Are",
    about_title: "Our Story",
    about_text: "Mabr started from a question we kept asking ourselves: does life have to happen in a city? We found people who tried it differently, living in villages, on farms, and in the desert, building simpler lives closer to the land and to each other. Now we're setting out to collect their stories, meet them, and talk through the challenges that keep most of us from trying what they did, so we can share all of it with anyone who feels like they're looking for something different.",

    pillar1_title: "Articles",
    pillar1_text: "We write about experiences and ways of living beyond the city.",
    pillar2_title: "Interviews",
    pillar2_text: "We talk to people who lived it themselves.",
    pillar3_title: "Studies",
    pillar3_text: "We read and summarize sustainable living models from around the world.",
    pillar4_title: "Talks",
    pillar4_text: "We meet and talk face to face with people who live it, or want to.",

    articles_tag: "Coming Soon",
    articles_title: "Articles & Talks",
    coming_soon_text: "Our first articles and interviews are on the way. Follow our newsletter to be the first to read them.",
    coming_soon_cta: "Join Our Newsletter",

    gallery_tag: "Moments from Mabr",
    gallery_title: "Photo Gallery",

    join_tag: "Mabr Membership",
    join_title: "Join Us",
    join_text: "Sign up with your email to get the latest articles, events, and invitations from Mabr.",
    form_name: "Name",
    form_email: "Email",
    form_submit: "Sign Up",
    form_note: "We'll only use your email to send you Mabr's latest news and events.",

    footer_tagline: "The Mabr Initiative",
    footer_copy: "© 2026 Mabr. All rights reserved.",

    form_success: "Signed up successfully! Check your inbox.",
    form_error: "Something went wrong. Make sure your Formspree form is connected (see README)."
  }
};

// ===== Language handling =====
function applyLanguage(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ar", lang === "ar");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const toggleBtn = document.getElementById("langToggle");
  toggleBtn.textContent = lang === "ar" ? "EN" : "عربي";

  localStorage.setItem("mabr_lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("mabr_lang") || "ar";
  applyLanguage(savedLang);

  document.getElementById("langToggle").addEventListener("click", () => {
    const current = document.documentElement.lang === "ar" ? "ar" : "en";
    applyLanguage(current === "ar" ? "en" : "ar");
  });

  // Mobile nav toggle
  const burger = document.getElementById("navBurger");
  const nav = document.getElementById("mainNav");
  burger.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  // Signup form (Formspree-ready). Replace the form action in index.html
  // with your own Formspree endpoint: https://formspree.io/f/YOUR_FORM_ID
  const form = document.getElementById("signupForm");
  const note = document.getElementById("formNote");
  form.addEventListener("submit", async (e) => {
    if (form.action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      const lang = document.documentElement.lang;
      note.textContent = translations[lang].form_error;
      note.style.color = "#e8b98f";
      return;
    }
    e.preventDefault();
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      const lang = document.documentElement.lang;
      if (res.ok) {
        note.textContent = translations[lang].form_success;
        note.style.color = "#9fd39b";
        form.reset();
      } else {
        note.textContent = translations[lang].form_error;
        note.style.color = "#e8b98f";
      }
    } catch (err) {
      const lang = document.documentElement.lang;
      note.textContent = translations[lang].form_error;
      note.style.color = "#e8b98f";
    }
  });
});
