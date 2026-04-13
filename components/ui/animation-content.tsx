"use client";
import React, { useRef, useEffect, useState, ReactNode } from "react";
import { gsap } from "gsap";

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  className?: string;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Singleton observer để tối ưu performance
let sharedObserver: IntersectionObserver | null = null;
const observedElements = new Map<Element, (isVisible: boolean) => void>();

const getSharedObserver = (threshold: number, rootMargin: string) => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target);
          callback?.(entry.isIntersecting);
        });
      },
      { threshold, rootMargin }
    );
  }
  return sharedObserver;
};

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.05,
  delay = 0,
  onComplete,
  rootMargin = "0px 0px -100px 0px",
  triggerOnce = false,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver(threshold, rootMargin);

    const callback = (visible: boolean) => {
      if (visible) {
        setIsVisible(true);
        if (triggerOnce) {
          observedElements.delete(element);
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    };

    observedElements.set(element, callback);
    observer.observe(element);

    return () => {
      observedElements.delete(element);
      observer.unobserve(element);
    };
  }, [threshold, triggerOnce, rootMargin]);

  // GSAP animation logic - chạy lại mỗi khi isVisible thay đổi
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;

    if (isVisible) {
      // Element vừa visible - animate vào
      gsap.fromTo(
        el,
        {
          [axis]: offset,
          scale,
          opacity: animateOpacity ? initialOpacity : 1
        },
        {
          [axis]: 0,
          scale: 1,
          opacity: 1,
          duration,
          ease,
          delay,
          onComplete
        }
      );
    } else if (!triggerOnce) {
      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1
      });
    }

    return () => {
      gsap.killTweensOf(el);
    };
  }, [
    isVisible,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    delay,
    onComplete,
    triggerOnce
  ]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
