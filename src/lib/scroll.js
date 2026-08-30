export const scroll = { target: 0, p: 0 };

export function initScroll() {
  const update = () => {
    const max = document.body.scrollHeight - window.innerHeight;
    scroll.target = max > 0 ? window.scrollY / max : 0;
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
  scroll.p = scroll.target;
  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}
