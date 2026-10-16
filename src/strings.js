// Single source for AR (Egyptian) + EN strings.
// Name is always "احمد مختار" — never transliterated.
// Content is identical to the original site; only new UI-chrome labels were added under `ui`.

export const STRINGS = {
  ar: {
    dir: 'rtl',
    langLabel: 'EN',
    nav: {
      home: 'الصفحة الرئيسية',
      brands: 'الماركات التجارية',
      faq: 'أسئلة شائعة',
      visit: 'تواصل معنا',
      contact: 'تواصل معنا'
    },
    ui: {
      mainNav: 'القائمة الرئيسية',
      menuOpen: 'افتح القائمة',
      menuClose: 'اقفل القائمة',
      themeToDark: 'الوضع الداكن',
      themeToLight: 'الوضع الفاتح',
      backToTop: 'العودة لأعلى',
      skip: 'تخطي للمحتوى',
      quickLinks: 'روابط سريعة'
    },
    hero: {
      title: 'احمد مختار',
      subtitle: 'اطلب دواك مش هتحتار',
      ctaPrimary: 'تواصل معنا',
      ctaSecondary: 'أسئلة شائعة',
      imagePlaceholder: '[المكان ده مخصص لصورة الهيرو]',
      imageSub: '(يعني اي صورة تبع الصيدليه)'
    },
    brands: {
      title: 'الشركات اللي بنتعامل معاها',
      desc: 'الشبكة دي هتتملي من لوحة التحكم بعدين. مفيش لوجوهات محطوطة دلوقتي عشان منألفش حاجة.',
      tiles: Array.from({ length: 20 }, (_, i) => `[INSERT BRAND ${i + 1} HERE]`)
    },
    faq: {
      kicker: 'أسئلة شائعة',
      title: 'عندك سؤال؟',
      desc: 'الأسئلة والإجابات هتتكتب من لوحة التحكم.',
      items: [
        { q: '[INSERT QUESTION 1 HERE]', a: '[INSERT ANSWER 1 HERE]' },
        { q: '[INSERT QUESTION 2 HERE]', a: '[INSERT ANSWER 2 HERE]' },
        { q: '[INSERT QUESTION 3 HERE]', a: '[INSERT ANSWER 3 HERE]' },
        { q: '[INSERT QUESTION 4 HERE]', a: '[INSERT ANSWER 4 HERE]' }
      ]
    },
    visit: {
      title: 'تواصل معنا',
      addressLabel: 'العنوان',
      addressValue: '[INSERT ADDRESS HERE]',
      socialLabel: 'تابعنا',
      facebook: 'فيسبوك',
      whatsapp: 'واتساب',
      socialNote: 'لينكات السوشيال ميديا هتتضاف من لوحة التحكم.'
    },
    footer: {
      line: 'صيدلية احمد مختار.',
      socialNote: 'السوشيال ميديا بس هي اللي بتتعدل من لوحة التحكم.',
      rights: 'جميع الحقوق محفوظة.'
    }
  },
  en: {
    dir: 'ltr',
    langLabel: 'عربي',
    nav: {
      home: 'Home',
      brands: 'Brands',
      faq: 'FAQ',
      visit: 'Contact us',
      contact: 'Contact us'
    },
    ui: {
      mainNav: 'Main menu',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      themeToDark: 'Dark mode',
      themeToLight: 'Light mode',
      backToTop: 'Back to top',
      skip: 'Skip to content',
      quickLinks: 'Quick links'
    },
    hero: {
      title: 'احمد مختار',
      subtitle: 'Your neighborhood pharmacy — need medicine or have a question about it? Drop by or message us.',
      ctaPrimary: 'Contact us',
      ctaSecondary: 'FAQ',
      imagePlaceholder: '[this empty space is for the hero image]'
    },
    brands: {
      title: 'Companies we carry',
      desc: 'This grid is filled later from the admin panel. No logos are placed now to avoid fake content.',
      tiles: Array.from({ length: 20 }, (_, i) => `[INSERT BRAND ${i + 1} HERE]`)
    },
    faq: {
      kicker: 'FAQ',
      title: 'Have a question?',
      desc: 'Real questions and answers will be written from the admin panel. Below is reserved space only.',
      items: [
        { q: '[INSERT QUESTION 1 HERE]', a: '[INSERT ANSWER 1 HERE]' },
        { q: '[INSERT QUESTION 2 HERE]', a: '[INSERT ANSWER 2 HERE]' },
        { q: '[INSERT QUESTION 3 HERE]', a: '[INSERT ANSWER 3 HERE]' },
        { q: '[INSERT QUESTION 4 HERE]', a: '[INSERT ANSWER 4 HERE]' }
      ]
    },
    visit: {
      title: 'Contact us',
      addressLabel: 'Address',
      addressValue: '[INSERT ADDRESS HERE]',
      socialLabel: 'Follow us',
      facebook: 'Facebook',
      whatsapp: 'WhatsApp',
      socialNote: 'Social links will be added from the admin panel.'
    },
    footer: {
      line: 'احمد مختار pharmacy.',
      socialNote: 'Only social links are editable from the admin panel.',
      rights: 'All rights reserved.'
    }
  }
}
