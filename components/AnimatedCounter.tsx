"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number; // in ms
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "", 
  duration = 2000,
  className = "" 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        let startTimestamp: number;
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          
          // Easing function (easeOutExpo)
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          setCount(Math.floor(easeProgress * value));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        };
        
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
