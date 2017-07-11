var myBoxes = document.querySelector("a-box");
myBoxes.setAttribute('dynamic-body', {
  shape: 'box',
  mass: 1.5,
  linearDamping: 0.005
});
