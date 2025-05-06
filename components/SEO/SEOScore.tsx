"use client";

import { useState, useEffect } from 'react';

interface SEOMetricProps {
  title: string;
  score: number;
  maxScore: number;
  description: string;
}

const SEOMetric = ({ title, score, maxScore, description }: SEOMetricProps) => {
  const percentage = (score / maxScore) * 100;
  
  let colorClass = 'bg-red-500';
  if (percentage >= 90) {
    colorClass = 'bg-green-500';
  } else if (percentage >= 70) {
    colorClass = 'bg-yellow-500';
  } else if (percentage >= 50) {
    colorClass = 'bg-orange-500';
  }
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className="text-sm font-medium">{score}/{maxScore}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${colorClass}`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default function SEOScore() {
  const [isClient, setIsClient] = useState(false);
  const [loadTime, setLoadTime] = useState(0);
  
  useEffect(() => {
    setIsClient(true);
    
    // قياس وقت تحميل الصفحة
    if (window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      setLoadTime(pageLoadTime / 1000); // تحويل إلى ثوانٍ
    }
    
    // يمكنك إضافة المزيد من مقاييس الأداء هنا
  }, []);
  
  if (!isClient) return null;
  
  // قائمة بالمقاييس المحتملة (ستختلف القيم الفعلية بناءً على الموقع)
  const metrics = [
    {
      title: "Meta Tags",
      score: 9,
      maxScore: 10,
      description: "العلامات الوصفية مثل العنوان والوصف والكلمات المفتاحية",
    },
    {
      title: "Schema.org",
      score: 10,
      maxScore: 10,
      description: "هيكلة البيانات باستخدام JSON-LD لتحسين فهم محركات البحث",
    },
    {
      title: "Page Speed",
      score: loadTime < 2 ? 9 : loadTime < 3 ? 7 : loadTime < 4 ? 5 : 3,
      maxScore: 10,
      description: `وقت التحميل: ${loadTime.toFixed(2)} ثانية`,
    },
    {
      title: "Mobile Friendly",
      score: 10,
      maxScore: 10,
      description: "تصميم متجاوب يعمل على جميع الأجهزة",
    },
    {
      title: "Accessibility",
      score: 8,
      maxScore: 10,
      description: "إمكانية الوصول للمحتوى لجميع المستخدمين",
    },
    {
      title: "Social Media",
      score: 10,
      maxScore: 10,
      description: "علامات Open Graph وTwitter Card لمشاركة المحتوى",
    },
  ];
  
  // حساب الدرجة الإجمالية
  const totalScore = metrics.reduce((acc, metric) => acc + metric.score, 0);
  const maxTotalScore = metrics.reduce((acc, metric) => acc + metric.maxScore, 0);
  const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">SEO Score Analysis</h2>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">Overall Score</h3>
          <span className="text-lg font-medium">{overallPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${
              overallPercentage >= 90 ? 'bg-green-500' : 
              overallPercentage >= 70 ? 'bg-yellow-500' : 
              overallPercentage >= 50 ? 'bg-orange-500' : 'bg-red-500'
            }`} 
            style={{ width: `${overallPercentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <SEOMetric
            key={index}
            title={metric.title}
            score={metric.score}
            maxScore={metric.maxScore}
            description={metric.description}
          />
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-800 mb-2">تحسينات مقترحة:</h4>
        <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
          <li>تابع إنشاء المزيد من المحتوى القيم المرتبط بمجالك لزيادة الروابط الداخلية.</li>
          <li>قم بتحسين ضغط الصور وملفات JavaScript و CSS لتسريع التحميل.</li>
          <li>ابحث عن فرص بناء الروابط الخارجية من مواقع ذات سلطة في مجالك.</li>
          <li>تأكد من تحسين مقاييس Core Web Vitals لتحسين ترتيب جوجل.</li>
        </ul>
      </div>
    </div>
  );
} 