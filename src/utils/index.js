export const scrollIntoView = (elementId) => {
  document.getElementById(elementId).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
