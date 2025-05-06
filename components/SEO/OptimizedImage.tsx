"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'framer-motion';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  lowQualitySrc?: string;
  blurEffect?: boolean;
  animation?: boolean;
  // يمكنك إضافة المزيد من خصائص التحسين هنا
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  priority,
  className,
  lowQualitySrc,
  blurEffect = true,
  animation = false,
  ...rest
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // إذا كان هناك صورة منخفضة الجودة، سنقوم بتحميل الصورة عالية الجودة بشكل غير متزامن
    if (lowQualitySrc && src !== lowQualitySrc) {
      const img = new window.Image();
      img.src = src as string;
      img.onload = () => {
        setImgSrc(src);
        setIsLoaded(true);
      };
    }
  }, [lowQualitySrc, src]);

  // كائن أنماط للصورة
  const imageClasses = `
    ${className || ''}
    ${blurEffect && !isLoaded ? 'blur-sm scale-105' : 'blur-0 scale-100'}
    transition-all duration-500 ease-in-out
  `.trim();

  // التحقق من تحميل الصورة عند استخدام Image المدمج من Next.js
  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  // استخدام Framer Motion للحصول على تأثيرات حركة إضافية
  if (animation) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
      >
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          onLoadingComplete={handleLoadingComplete}
          className={imageClasses}
          {...rest}
        />
      </motion.div>
    );
  }

  // استخدام صورة Next.js العادية بدون تأثيرات حركة
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      onLoadingComplete={handleLoadingComplete}
      className={imageClasses}
      {...rest}
    />
  );
} 