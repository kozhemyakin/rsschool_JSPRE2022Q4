function openMenu() {
    document.querySelector('.opened-mobile-menu').classList.add('activated')
}

function closeMenu() {
    document.querySelector('.opened-mobile-menu').classList.remove('activated')
  }

function addBlurGardens() {
    document.querySelector('.btn-gardens').classList.toggle('active');

    if (document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.btn-gardens').classList.toggle('active');
    }

    bluring();
}

function addBlurLawn() {
    document.querySelector('.btn-lawn').classList.toggle('active');

    if (document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.btn-lawn').classList.toggle('active');
    }

    bluring();
}

function addBlurPlanting() {
    document.querySelector('.btn-planting').classList.toggle('active');

    if (document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.btn-planting').classList.toggle('active');
    }

    bluring();
}

function bluring() {
    if (document.querySelector('.btn-gardens.active') && !document.querySelector('.btn-lawn.active') && !document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.add('blured')
    } else if (!document.querySelector('.btn-gardens.active') && !document.querySelector('.btn-lawn.active') && !document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.remove('blured')
    } else if (!document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && !document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.add('blured')
    } else if (document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && !document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.add('blured')
    } else if (!document.querySelector('.btn-gardens.active') && !document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.remove('blured')
    } else if (!document.querySelector('.btn-gardens.active') && document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.remove('blured')
    } else if (document.querySelector('.btn-gardens.active') && !document.querySelector('.btn-lawn.active') && document.querySelector('.btn-planting.active')) {
        document.querySelector('.service-items__item:nth-child(1) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(2) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(3) > .service-items__item__img').classList.add('blured')
        document.querySelector('.service-items__item:nth-child(4) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(5) > .service-items__item__img').classList.remove('blured')
        document.querySelector('.service-items__item:nth-child(6) > .service-items__item__img').classList.remove('blured')
    }
}