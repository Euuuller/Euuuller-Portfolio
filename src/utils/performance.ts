/**
 * Throttles a function to ensure it's only called at most once every `limit` milliseconds.
 * Useful for scroll and resize events.
 */
export const throttle = <T extends (...args: any[]) => void>(func: T, limit: number): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounces a function to ensure it's only called after `wait` milliseconds have elapsed since the last call.
 * Useful for search inputs or window resize calculations.
 */
export const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function(this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};
