
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = "up",
  duration = 0.7,
  delay = 0,
  className = "",
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once]);

  const getAnimationClass = () => {
    switch (direction) {
      case "up":
        return "animate-slide-up";
      case "down":
        return "animate-slide-down";
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? getAnimationClass() : "opacity-0"}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationFillMode: "both"
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
