

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';
import { gsap } from 'gsap';

interface UseScrollCounterOptions {
  duration?:  number;
  ease?:      string;
  format?:    (n: number) => string;
  threshold?: number;
}

export function useScrollCounter(
  targetValue: number,
  options?: UseScrollCounterOptions,
): [RefObject<HTMLDivElement | null>, RefObject<HTMLSpanElement | null>] {
  const wrapperRef = useRef<HTMLDivElement  | null>(null);
  const displayRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const display = displayRef.current;
    if (!wrapper || !display) return;

    const threshold = options?.threshold ?? 0.3;
    const duration  = options?.duration  ?? 2.4;
    const ease      = options?.ease      ?? 'power2.out';
    const format    = options?.format    ?? ((n: number) => Math.round(n).toLocaleString('uk-UA'));

    let tween: gsap.core.Tween | undefined;
    const proxy = { val: 0 };

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        tween?.kill();
        proxy.val = 0;
        if (display) display.textContent = format(0);

        tween = gsap.to(proxy, {
          val: targetValue,
          duration,
          ease,
          onUpdate: () => {
            if (displayRef.current) {
              displayRef.current.textContent = format(proxy.val);
            }
          },
        });
      } else {
        tween?.kill();
        proxy.val = 0;
        if (displayRef.current) {
          displayRef.current.textContent = format(0);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, { threshold });
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [targetValue, options]);

  return [wrapperRef, displayRef];
}
