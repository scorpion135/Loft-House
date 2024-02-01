// Nav icon
const navIconBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const headerRow = document.querySelector('.header__top-row')

navIconBtn.addEventListener('click', function(e) {
    navIcon.classList.toggle('nav-icon--active')
    headerRow.classList.toggle('header__top-row--mobile')
    document.body.toggle('no-scroll')
})


/*Phone Mask*/ 

mask('[data-tel-input]');

// Удаляем '+', если больше ничего не введено, чтобы показать placeholder


const phoneInputs = document.querySelectorAll('[data-tel-input]')

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') {
            input.value = ''
        }
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') {
            input.value = ''
        }
    })    
})


// Yandex map

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var map = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928],
        {
            balloonContent :
                `
                <div class="balloon">
                    <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                    <div class="balloon__contacts">
                        <a href="tel:+78121234567">8 (812) 123-45-67</a>
                    </div>
                </div>
            `
        }, 
        {
        iconLayout: 'default#image',
        iconImageHref: '../img/map/location-pin.svg',
        icon_imagesize: [40, 40],
        iconImageOffset: [-20, -40]
    });

    map.controls.remove('geolocationControl')
    map.controls.remove('searchControl')
    map.controls.remove('trafficControl')
    map.controls.remove('typeSelector')
    map.controls.remove('rulerControl')
    map.controls.remove('geolocationControl')
    // map.controls.remove('fullscreenControl')
    // map.controls.remove('zoomControl')
    map.behaviors.disable(['scrollZoom'])


    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}