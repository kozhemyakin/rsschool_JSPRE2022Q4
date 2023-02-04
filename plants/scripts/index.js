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

/* ACCORDION */

function accordeonBasic() {
    document.querySelector('.accordion > button:nth-child(3)').style.display = 'flex';
    document.querySelector('.standard--opened').style.display = 'none';
    document.querySelector('.accordion > button:nth-child(5)').style.display = 'flex';
    document.querySelector('.pro-care--opened').style.display = 'none';

    document.querySelector('.accordion > button:nth-child(1)').style.display = 'none';
    document.querySelector('.basic--opened').style.display = 'block';
    document.querySelector('.basic--opened > img').src = 'https://i.yapx.ru/VdMz7.png';
}
// transform: rotate(180deg);
function accordeonCloseBasic() {
    if (event.target.innerText === 'Order') {
        return
    }

    document.querySelector('.accordion > button:nth-child(1)').style.display = 'flex';
    document.querySelector('.basic--opened').style.display = 'none';
}

function accordeonStandard() {
    document.querySelector('.accordion > button:nth-child(1)').style.display = 'flex';
    document.querySelector('.basic--opened').style.display = 'none';
    document.querySelector('.accordion > button:nth-child(5)').style.display = 'flex';
    document.querySelector('.pro-care--opened').style.display = 'none';

    document.querySelector('.accordion > button:nth-child(3)').style.display = 'none';
    document.querySelector('.standard--opened').style.display = 'block';
    document.querySelector('.standard--opened > img').src = 'https://i.yapx.ru/VdMz7.png';
}

function accordeonCloseStandard() {
    if (event.target.innerText === 'Order') {
        return
    }

    document.querySelector('.accordion > button:nth-child(3)').style.display = 'flex';
    document.querySelector('.standard--opened').style.display = 'none';
}

function accordeonProCare() {
    document.querySelector('.accordion > button:nth-child(1)').style.display = 'flex';
    document.querySelector('.basic--opened').style.display = 'none';
    document.querySelector('.accordion > button:nth-child(3)').style.display = 'flex';
    document.querySelector('.standard--opened').style.display = 'none';

    document.querySelector('.accordion > button:nth-child(5)').style.display = 'none';
    document.querySelector('.pro-care--opened').style.display = 'block';
    document.querySelector('.pro-care--opened > img').src = 'https://i.yapx.ru/VdMz7.png';
}

function accordeonCloseProCare() {
    if (event.target.innerText === 'Order') {
        return
    }

    document.querySelector('.accordion > button:nth-child(5)').style.display = 'flex';
    document.querySelector('.pro-care--opened').style.display = 'none';
}