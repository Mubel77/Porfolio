import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const MotionExperience = () => {
  const lenisRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    const animateScroll = (time) => lenis.raf(time * 1000);

    lenisRef.current = lenis;
    gsap.ticker.add(animateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(animateScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    lenisRef.current?.scrollTo(0, { immediate: true });
    if (!lenisRef.current) window.scrollTo({ top: 0, behavior: 'auto' });
    if (prefersReducedMotion) return undefined;

    let observer;
    const frame = window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll('[data-reveal]');

      if (!('IntersectionObserver' in window)) {
        gsap.fromTo(elements, { opacity: 0, y: 24 }, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        });
        return;
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          gsap.fromTo(entry.target, { opacity: 0, y: 24 }, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'all',
          });
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.12 });

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
};

export default MotionExperience;
