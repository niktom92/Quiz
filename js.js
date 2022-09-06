
var steps = [false,false,false,false,false,false];
var curr__step = 0;
// переход по шагам
function to__step(index, need_push) {
	curr__step = index;
	for (var i = 0; i < steps.length; i++) {
		if (!$("#step" + i).is(':hidden')) {
			$("#step" + i).hide();
		}
	};
	$("#step" + index).show();}
 // Проверка заполненности радиокнопки или чекбокса
function check_radio_selected(elem_id, error_message) {
	obj = $('input[name="' + elem_id + '"]:checked');
	if (!(obj.length && obj.val()))	{
		alert(error_message);
		return false;
	}
	return true;
}
// Проверки полей по шагам и уведомления при незаполненных полях

	$(document).ready(function() { to__step(0, true); }); // задаем первоначальный индекс
	
	$("#to__step1,#to__step1__bk").click(function(event) {
		event.preventDefault();
		to__step(1, true);
		});

	$("#to__step2, #to__step2__bk").click(function(event) {
		event.preventDefault();
		if (check_radio_selected("variant", "Укажите variant")) {
			to__step(2, true);
		}
	});

$("#to__step3, #to__step3__bk").click(function(event) {
		event.preventDefault();
		if (check_radio_selected("otvet", "Укажите otvet")) {
			to__step(3, true);
		}
	});
// ветка ветления
$("#to__step4, #to__step4__bk").click(function(event) {
		event.preventDefault();
		if (check_radio_selected("vetka", "Укажите vetka")) {

			to__step(4, true);
			var as = ($('input[name=vetka]:checked').val());
			
		switch (as) {
			case 'ADD':
					$(".vetka1_10").show();
				$(".vetka1_20").hide();
				$(".vetka1_30").hide();
			break;
			case 'BAA':
						$(".vetka1_20").show();
				$(".vetka1_30").hide();
				$(".vetka1_10").hide();
			break;
			case 'CDD':
					$(".vetka1_30").show();
				$(".vetka1_20").hide();
				$(".vetka1_10").hide();
			break;
		}			
		}
	});