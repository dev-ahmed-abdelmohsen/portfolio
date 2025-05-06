// الكلمات المفتاحية الرئيسية للموقع
export const mainKeywords = [
  'Ahmed Adb Elmohsen',
  'Software Engineer',
  'Web Developer',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'React Developer',
  'Next.js Developer',
  'TypeScript Developer',
  'Cairo Developer',
  'Egypt Developer',
  'Portfolio',
  'Professional Portfolio',
];

// كلمات مفتاحية للمهارات
export const skillKeywords = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'NestJS',
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'TailwindCSS',
  'HTML/CSS',
  'Docker',
  'AWS',
  'Git',
  'CI/CD',
  'Redis',
];

// كلمات مفتاحية للمشاريع
export const projectKeywords = [
  'Muslim Azkar App',
  'Real State Website',
  'E-Commerce Website',
  'Portfolio Project',
  'Web Applications',
  'Mobile Responsive',
  'Frontend Projects',
  'Backend Projects',
  'Full Stack Projects',
  'UI/UX Design',
];

// دمج جميع الكلمات المفتاحية لاستخدامها في صفحة معينة
export const generatePageKeywords = (
  page: 'home' | 'about' | 'projects' | 'contact',
  additionalKeywords: string[] = []
): string => {
  let keywords: string[] = [...mainKeywords];

  switch (page) {
    case 'home':
      keywords = [...keywords, ...skillKeywords.slice(0, 5)];
      break;
    case 'about':
      keywords = [...keywords, ...skillKeywords];
      break;
    case 'projects':
      keywords = [...keywords, ...projectKeywords];
      break;
    case 'contact':
      keywords = [...keywords, 'Contact Ahmed', 'Hire Developer', 'Developer for Hire'];
      break;
  }

  // إضافة الكلمات المفتاحية الإضافية
  keywords = [...keywords, ...additionalKeywords];

  // إزالة التكرارات
  keywords = [...new Set(keywords)];

  // إرجاع الكلمات المفتاحية كنص مفصول بفواصل
  return keywords.join(', ');
}; 