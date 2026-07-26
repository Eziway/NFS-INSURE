/**
 * Composable: useScrollReveal
 *
 * Uses IntersectionObserver to trigger CSS reveal animations
 * when elements enter the viewport — replaces WOW.js.
 *
 * Usage:
 *   import { useScrollReveal } from '@/composables/useScrollReveal'
 *
 *   // In setup():
 *   const { observe } = useScrollReveal()
 *
 *   // In onMounted():
 *   observe(elementRef.value)         // single element
 *   observe(containerRef.value, true) // observe all children
 */

import { onUnmounted } from 'vue';

export function useScrollReveal(options = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -50px 0px',
    revealClass = 'revealed',
  } = options;

  let observer = null;

  function createObserver() {
    if (observer) return observer;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(revealClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    return observer;
  }

  /**
   * Start observing an element (or its children) for viewport entry.
   *
   * @param {HTMLElement} el - The element to observe.
   * @param {boolean} children - If true, observe all direct children instead.
   */
  function observe(el, children = false) {
    if (!el) return;

    const obs = createObserver();

    if (children) {
      Array.from(el.children).forEach((child) => {
        obs.observe(child);
      });
    } else {
      obs.observe(el);
    }
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  return { observe };
}
