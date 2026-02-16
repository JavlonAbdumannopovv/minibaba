"use client";

import * as React from "react";

type Options = {
  step?: number;
  rootMargin?: string;
};

export function useInfiniteSlice(total: number, options: Options = {}) {
  const STEP = options.step ?? 8;
  const rootMargin = options.rootMargin ?? "200px";

  const [visibleCount, setVisibleCount] = React.useState(STEP);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);
  const loadingRef = React.useRef(false);

  // user scroll qilganini aniqlash (bir marta yetadi)
  const [hasScrolled, setHasScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // total o‘zgarsa reset (filter/supplier o‘zgarganda)
  React.useEffect(() => {
    setVisibleCount(STEP);
    setIsLoadingMore(false);
    loadingRef.current = false;
  }, [total, STEP]);

  const hasMore = visibleCount < total;

  const sentinelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        if (!hasScrolled) return;
        if (!hasMore) return;
        if (loadingRef.current) return;

        loadingRef.current = true;
        setIsLoadingMore(true);

        requestAnimationFrame(() => {
          setVisibleCount((prev) => Math.min(prev + STEP, total));
          setIsLoadingMore(false);
          loadingRef.current = false;
        });
      },
      { rootMargin, threshold: 0 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [hasMore, total, hasScrolled, STEP, rootMargin]);

  return { visibleCount, setVisibleCount, isLoadingMore, hasMore, sentinelRef };
}
