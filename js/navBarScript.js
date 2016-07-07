//Переключение вкладок без перезагрузки страницы

$("#postz").click(function () {  //Обработка клика по вкладке "Главная"
    $.fn.fullpage.moveTo('contentSection', 0)
});

$("#muzic").click(function () {    //Обработка клика по вкладке "Фото/Видео"
    $.fn.fullpage.moveTo('contentSection', 1)
	
});
$("#videoz").click(function () { //Обработка клика по вкладке "Цены/Контакты"
    $.fn.fullpage.moveTo('contentSection', 2)
});

$("#photoz").click(function () { //Обработка клика по вкладке "Гостевая"
    $.fn.fullpage.moveTo('contentSection', 3)
});