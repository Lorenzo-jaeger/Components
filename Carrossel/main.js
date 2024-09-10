function updateCarrossel() {
    const carrosseis = document.querySelectorAll('.carrossel');

    carrosseis.forEach(carrossel => {
      const container = carrossel.querySelector('.container, .container-reverse');
      const cloneTimes = Math.ceil(carrossel.clientWidth / container.clientWidth) + 1;

      carrossel.innerHTML = '';
      const clones = [...new Array(cloneTimes)]
        .map(() => container.cloneNode(true))
        .forEach(clone => carrossel.appendChild(clone));
    });
  }

  updateCarrossel();
  window.addEventListener('resize', updateCarrossel);