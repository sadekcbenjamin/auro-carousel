// Vanilla JS example
// -------------------------

export function centerElementExample() {
  const carousel = document.querySelector('auro-carousel#centerElement');
  const panes = carousel.querySelectorAll('auro-pane');
  let selectedPane = carousel.querySelector('auro-pane[selected]');

  panes.forEach(pane => pane.addEventListener('click', () => {
    selectedPane.selected = false;
    pane.selected = true;
    selectedPane = pane;
    carousel.centerElement(selectedPane);
  }));
}
