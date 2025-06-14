// الكلمات المفتاحية الرئيسية للموقع
export const mainKeywords = [
  'Ahmed Abd Elmohsen',
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
  'Java',
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
  'React Native',
  'Expo',
  'TypeScript',
  // Added mobile technologies
  'Flutter',
  'Swift',
  'Kotlin',
  'Firebase',
  'Push Notifications',
  'Mobile Analytics',
  'App Store Optimization',
  'Google Play Services',
  'Capacitor',
  'Progressive Web Apps',
  'Mobile UI/UX',
  'Offline-first Apps',
  // GenCare mobile app specific technologies
  'Expo Router',
  'React Navigation',
  'TanStack Query',
  'React Native Reanimated',
  'AsyncStorage',
  'Axios',
  'Context API',
  'JWT Authentication',
  'React Native DateTimePicker',
  'React Native Picker',
  'Expo Modules',
  'Mobile Form Validation',
  'Native Animation',
  'Mobile State Management',
  'Cross-platform Development',
];

// كلمات مفتاحية للمشاريع
export const projectKeywords = [
  'Athkar Islamic App',
  'Daily Adhkar Application',
  'Quran Learning Platform',
  'GenCare Pregnancy App',
  'Healthcare Mobile Application',
  'AI Ultrasound Analysis',
  'ViewStore E-Commerce',
  'Multi-Platform E-Commerce',
  'Online Retail Solution',
  'Mawa Housing Platform',
  'Student Housing System',
  'Property Management',
  'React Native Development',
  'Next.js Applications',
  'Full Stack Development',
  'MongoDB Database Design',
  'Express Backend Development',
  'API Development and Integration',
  'Cloud Deployment Solutions',
  'Performance Optimization',
  'Authentication Systems',
  'Mobile App Development',
  'TypeScript Applications',
  'TailwindCSS Projects',
  'Arabic Language Support',
  'RTL User Interface',
  'Multi-tenant Architecture',
  'Map Integration',
  // Added mobile project keywords
  'Native Mobile Development',
  'Cross-platform Mobile Apps',
  'App Store Publishing',
  'Google Play Store',
  'Firebase Integration',
  'Push Notification Systems',
  'Mobile Authentication',
  'Offline-first Mobile Apps',
  'Mobile Performance Optimization',
  'Mobile Payment Integration',
  'Location-based Services',
  'Social Media Integration',
  'Mobile Analytics Implementation',
  // GenCare specific project keywords
  'Mobile Pregnancy Tracking',
  'Health Monitoring App',
  'Patient Profile Management',
  'Mobile Healthcare UI/UX',
  'Medical Data Visualization',
  'Pregnancy Week Calculator',
  'Health Metrics Tracking',
  'GenCare Mobile Application',
  'Interactive Onboarding Flow',
  'Medical Information System',
];

// دمج جميع الكلمات المفتاحية لاستخدامها في صفحة معينة
export const generatePageKeywords = (
  page: 'home' | 'about' | 'projects' | 'contact',
  additionalKeywords: string[] = []
): string => {
  let keywords: string[] = [...mainKeywords];

  switch (page) {
    case 'home':
      keywords = [...keywords, ...skillKeywords.slice(0, 10), 'Professional Developer', 'Cairo Software Engineer'];
      break;
    case 'about':
      keywords = [...keywords, ...skillKeywords, 'Professional Experience', 'Software Development Career'];
      break;
    case 'projects':
      keywords = [...keywords, ...projectKeywords.slice(0, 15), 'Development Portfolio', 'Technical Projects'];
      break;
    case 'contact':
      keywords = [...keywords, 'Contact Ahmed Abd Elmohsen', 'Hire Full Stack Developer', 'Professional Developer for Hire', 'Software Engineer Cairo'];
      break;
  }

  // إضافة الكلمات المفتاحية الإضافية
  keywords = [...keywords, ...additionalKeywords];

  // إزالة التكرارات
  keywords = [...new Set(keywords)];

  // إرجاع الكلمات المفتاحية كنص مفصول بفواصل
  return keywords.join(', ');
};