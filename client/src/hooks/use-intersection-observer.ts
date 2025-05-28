import { useState, useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverParams {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: RefObject<HTMLDivElement>;
  inView: boolean;
  entry?: IntersectionObserverEntry;
}

export function useIntersectionObserver({
  threshold = 0,
  rootMargin = "0px",
  triggerOnce = false,
}: UseIntersectionObserverParams = {}): UseIntersectionObserverReturn {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const ref = useRef<HTMLDivElement>(null);
  const observedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!window.IntersectionObserver || !ref.current) return;
    
    // If we want to trigger only once and it's already been triggered, don't observe again
    if (triggerOnce && observedRef.current && inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        setEntry(entry);
        
        if (triggerOnce && entry.isIntersecting) {
          observer.disconnect();
          observedRef.current = true;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, inView]);

  return { ref, inView, entry };
}
