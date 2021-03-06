const scrollToElement = id => {
  const positionY = document.getElementById(`${id}`).offsetTop;
  window.scrollTo({
    top: positionY,
    behavior: 'smooth',
  });
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export { scrollToElement, scrollTop };
