$(document).ready(() => {

    $('.category').click((e) => {
        let currentElement = $(e.target);//Чтобы не искать дважды один и тот же элемент, я один раз его создаю.
        $('.products-container').hide();//При нажатии на категорию мы скрываем все наши блоки с классом products-container
        let id = currentElement.data('id');
        $('#' + id).show();//Отображаем нужный блок с товаром

        $('.category').removeClass('active');//Найдем все элементы и с помощью свойства removeClass удалим класс active.
        currentElement.addClass('active');

        //refresh slider (обновление слайдера при переключении вкладки для правильного отображения продуктов)
        $('#' + id + ' .products').slick('refresh');
        $('#' + id + ' .products-nav').slick('refresh');
    });

    $('#burgers-container .products').slick({
        slidesToShow: 1,//показать слайдов 1 - подходит нам
        slidesToScroll: 1,//прокручивать по одному слайду - подходит нам
        arrows: true,//стрелки нам нужны,поэтому false поменяли на true
        fade: true,//плавная анимация переключения слайдов - подходит нам
        asNavFor: '#burgers-container .products-nav'//указание (обращение) к нашему навигатору,где будут навигационные элементы
    });
    $('#burgers-container .products-nav').slick({
        slidesToShow: 7,//показывать слайдов по 3, а у нас их 7. Значит меняю 3 на 7
        slidesToScroll: 7,//скролить мы их не собираемся, поэтому меняем 1 на 7
        asNavFor: '#burgers-container .products',//связывание второго блока с нашим первым блоком
        dots: false,//точки нам не нужны,поэтому меняем true на false
        centerMode: false,//Заменю true на false, чтобы наши элементы не центрировались,а были слева
        infinite: false,//Добавили свойство,чтобы бесконечного пролистывания у нас не было
        focusOnSelect: true//Оставляем фокус при выборе
    });

    $('#fries-container .products').slick({
        slidesToShow: 1,//показать слайдов 1 - подходит нам
        slidesToScroll: 1,//прокручивать по одному слайду - подходит нам
        arrows: true,//стрелки нам нужны,поэтому false поменяли на true
        fade: true,//плавная анимация переключения слайдов - подходит нам
        asNavFor: '#fries-container .products-nav'//указание (обращение) к нашему навигатору,где будут навигационные элементы
    });
    $('#fries-container .products-nav').slick({
        slidesToShow: 3,//показывать слайдов по 3.
        slidesToScroll: 3,//скролить мы их не собираемся, поэтому меняем 1 на 3
        asNavFor: '#fries-container .products',//связывание второго блока с нашим первым блоком
        dots: false,//точки нам не нужны,поэтому меняем true на false
        centerMode: false,//Заменю true на false, чтобы наши элементы не центрировались,а были слева
        infinite: false,//Добавили свойство,чтобы бесконечного пролистывания у нас не было
        focusOnSelect: true//Оставляем фокус при выборе
    });

    $('#sauces-container .products').slick({
        slidesToShow: 1,//показать слайдов 1 - подходит нам
        slidesToScroll: 1,//прокручивать по одному слайду - подходит нам
        arrows: true,//стрелки нам нужны,поэтому false поменяли на true
        fade: true,//плавная анимация переключения слайдов - подходит нам
        asNavFor: '#sauces-container .products-nav'//указание (обращение) к нашему навигатору,где будут навигационные элементы
    });
    $('#sauces-container .products-nav').slick({
        slidesToShow: 4,//показывать слайдов по 3, а у нас их 4. Значит меняю 3 на 4
        slidesToScroll: 4,//скролить мы их не собираемся, поэтому меняем 1 на 4
        asNavFor: '#sauces-container .products',//связывание второго блока с нашим первым блоком
        dots: false,//точки нам не нужны,поэтому меняем true на false
        centerMode: false,//Заменю true на false, чтобы наши элементы не центрировались,а были слева
        infinite: false,//Добавили свойство,чтобы бесконечного пролистывания у нас не было
        focusOnSelect: true//Оставляем фокус при выборе
    });

    $('#drinks-container .products').slick({
        slidesToShow: 1,//показать слайдов 1 - подходит нам
        slidesToScroll: 1,//прокручивать по одному слайду - подходит нам
        arrows: true,//стрелки нам нужны,поэтому false поменяли на true
        fade: true,//плавная анимация переключения слайдов - подходит нам
        asNavFor: '#drinks-container .products-nav'//указание (обращение) к нашему навигатору,где будут навигационные элементы
    });
    $('#drinks-container .products-nav').slick({
        slidesToShow: 3,//показывать слайдов по 3.
        slidesToScroll: 3,//скролить мы их не собираемся, поэтому меняем 1 на 3
        asNavFor: '#drinks-container .products',//связывание второго блока с нашим первым блоком
        dots: false,//точки нам не нужны,поэтому меняем true на false
        centerMode: false,//Заменю true на false, чтобы наши элементы не центрировались,а были слева
        infinite: false,//Добавили свойство,чтобы бесконечного пролистывания у нас не было
        focusOnSelect: true//Оставляем фокус при выборе
    });

    //Обработка JS карусели с отзывами
    $('#reviews').slick({
        infinite: true, /**Бесконечная прокрутка**/
        slidesToShow: 2, /**По сколько слайдов показывает**/
        slidesToScroll: 2, /**По сколько слайдов перелистывает**/
        responsive: [
            {
                breakpoint: 579,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });

    //Обработка JS всплывающего окна с отправкой данных
    $('.open-modal').click(() => {
        $('#reservation-container').css('display', 'flex');//обработчик по клику на кнопку выходит модальное окно-1
    });

    $('#reservation-cancel-close, #reservation-container').click((e) => {
        if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close') {
            $('#reservation-container').hide();//обработчик по клику на крестик или иное место закрывается модальное окно-1
        }
    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let count = $('#count');
        let phone = $('#phone');
        let time = $('#time');

        if (name.val() && count.val() && phone.val() && time.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&count=' + count.val() + '&phone=' + phone.val() + '&time=' + time.val(),
                success: () => {
                    $('#reservation-sent').show();
                    $('#reservation-content').hide();
                },
                error: () => {
                    $('#reservation-container').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.');
                }
            });
        } else {
            $('#reserve-error').show();
        }
    });


    //Обработчик по клику иконки бургер в Header появляется меню
    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    });

    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    });
});


