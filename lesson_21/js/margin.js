const blockItems = document.querySelectorAll('.block__item');

blockItems.forEach(item => {
  const childElements = Array.from(item.children);
  const elementsWithContent = childElements.filter(child => child.textContent.trim() !== '');

  for (let i = 0; i < elementsWithContent.length; i++) {
    const child = elementsWithContent[i];
    if (i < elementsWithContent.length - 1) {
      child.style.marginBottom = '0.9375rem';
    }
  }
});