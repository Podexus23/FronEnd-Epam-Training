function spamTrash(quantity) {
  const place = document.querySelector('.trash-place');
  const can = document.querySelector('.trash-can');
  const placeSizes = place.getBoundingClientRect()
  can.innerHTML = '<img src="./img/trash-can-with-cover.png" alt="">';
  // can.style.zIndex = 1;

  for (let i = 0; i < quantity; i++) {
    const img = document.createElement('img');
    img.classList.add('trash-bag');
    img.src = "./img/recycling-bag.png";
    img.style.top = `${Math.random()*370}px`;
    img.style.left = `${60 + Math.floor(Math.random()*(placeSizes.width - 100))}px`;
    place.append(img)
  }
}

spamTrash(10)

let bags = document.querySelectorAll('.trash-bag');

bags.forEach((bag) => {
  let currentDroppable = null;
  let onDrop = false;
  bag.onmousedown = function (event) {

    let shiftX = event.clientX - bag.getBoundingClientRect().left;
    let shiftY = event.clientY - bag.getBoundingClientRect().top;

    bag.style.position = 'absolute';
    bag.style.zIndex = 1000;
    document.body.append(bag);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      bag.style.left = pageX - shiftX + 'px';
      bag.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      bag.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      bag.hidden = false;

      if (!elemBelow) return;

      let droppableBelow = elemBelow.closest('.trash-can');
      if (currentDroppable != droppableBelow) {
        if (currentDroppable) {
          onDrop = false;
          leaveDroppable(currentDroppable);

        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          onDrop = true;
          enterDroppable(currentDroppable);
        }
      }
    }

    document.addEventListener('mousemove', onMouseMove);

    bag.onmouseup = function () {
      if (onDrop) {
        leaveDroppable(currentDroppable)
        onDrop = false;
        bag.style.display = 'none';
      }
      document.removeEventListener('mousemove', onMouseMove);
      bag.onmouseup = null;
    };

  };

  function enterDroppable(elem) {
    elem.innerHTML = '<img src="./img/open-trash-can.png" alt="">';
  }

  function leaveDroppable(elem) {
    elem.innerHTML = '<img src="./img/trash-can-with-cover.png" alt="">';
  }

  bag.ondragstart = function () {
    return false;
  };
})