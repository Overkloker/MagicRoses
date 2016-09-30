import app from "./../application";

app.controller("AppController", function ($scope) {
  $(function() {

    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });

    //Chrome Smooth Scroll
    try {
      $.browserSelector();
      if($("html").hasClass("chrome")) {
        $.smoothScroll();
      }
    } catch(err) {

    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  });

  $(window).scroll(function(e){
    if ($(window).width() > 1200) {
      function parallax(){
        var scrolled = $(window).scrollTop();
        $('.paralax_bot').css('top',-(scrolled-33000*0.1)+'px');
      };

      parallax();
    }
  });

  $('.intro').mousemove(function(event){
    if ($(window).width() > 1200) {
      var X = event.pageX+4200,
        Y = event.pageY+1200;
      $('.paralax_intro').css({
        'background-position':0.01*X+'%'+' '+0.01*Y+'%',
      });

      $('.paralax_intro_3').css({
        'background-position':0.01*X+'%'+' '+0.01*Y+'%',
      });
    }
  });

  // $(document).ready( function(){
  //
  //   // Реализация конструктора
  //
  //   // Переменные
  //   var flo_name;
  //   var flo_number;
  //   var flo_size;
  //   var flo_color;
  //
  //   var btm_ap_1 = 0, btm_ap_2 = 0, btm_ap_3 = 0, btm_ap_4 = 0, btm_ap_5 = 0, btm_ap_6 = 0;
  //
  //   // Функция обнуления стилей для переходов
  //   // вперед и назад
  //   var step_on_1 = function() {
  //     $(".constr_step_1, .constr_step_2, .constr_step_3").css("display", "none");
  //     $(".constr_step_1").css("display", "block");
  //     $(".cencel").css("display", "none");
  //   };
  //
  //   var step_on_2 = function() {
  //     $(".constr_step_1, .constr_step_2, .constr_step_3").css("display", "none");
  //     $(".constr_step_2").css("display", "block");
  //     $(".cencel").css("display", "block");
  //     $(".cencel").css("position", "absolute");
  //   };
  //
  //   var step_on_3 = function() {
  //     $(".constr_step_1, .constr_step_2, .constr_step_3").css("display", "none");
  //     $(".constr_step_3").css("display", "block");
  //     $(".cencel").css("display", "block");
  //     $(".cencel").css("position", "static");
  //   };
  //
  //   var flo_3_off = function() {
  //     $(".item_4").css("display", "none");
  //     $(".item_5").css("display", "none");
  //     $(".item_6").css("display", "none");
  //     $(".item_7").css("display", "none");
  //     $(".item_8").css("display", "none");
  //     $(".item_9").css("display", "none");
  //   };
  //
  //   var flo_3_on = function() {
  //     $(".item_4").css("display", "block");
  //     $(".item_5").css("display", "block");
  //     $(".item_6").css("display", "block");
  //     $(".item_7").css("display", "block");
  //     $(".item_8").css("display", "block");
  //     $(".item_9").css("display", "block");
  //   };
  //
  //   var flo_size_box_off = function() {$(".flower_item_size").css("display", "none");};
  //   var flo_size_box_on = function() {$(".flower_item_size").css("display", "block");};
  //
  //   $('.cencel').click(function(){
  //     flo_name = " ";
  //     flo_number = " ";
  //     flo_size = " ";
  //     flo_color = " ";
  //
  //     btm_ap_1 = 0;
  //     btm_ap_2 = 0;
  //     btm_ap_3 = 0;
  //     btm_ap_4 = 0;
  //     btm_ap_5 = 0;
  //     btm_ap_6 = 0;
  //
  //     $(".btn_apply").removeClass("active");
  //     $(".size_box").removeClass("active");
  //
  //     $(".constr").css("min-height", "4000px");
  //     flo_size_on();
  //     flo_3_on();
  //     flo_size_box_on();
  //
  //     step_on_1();
  //   });
  //
  //   // Автозаполнение кол-ва роз
  //   var flo_autolot = function() {
  //     $(".pick .name_item_1").text("19 роз");
  //     $(".pick .name_item_2").text("29 роз");
  //     $(".pick .name_item_3").text("39 роз");
  //     $(".pick .name_item_4").text("59 роз");
  //     $(".pick .name_item_5").text("101 розa");
  //     $(".pick .name_item_6").text("201 розa");
  //     $(".pick .name_item_7").text("301 розa");
  //     $(".pick .name_item_8").text("501 розa");
  //     $(".pick .name_item_9").text("1001 розa");
  //   };
  //
  //   var flo_autolot_3item = function() {
  //     $(".pick .name_item_1").text("31 роза");
  //     $(".pick .name_item_2").text("51 роза");
  //     $(".pick .name_item_3").text("101 роза");
  //   };
  //
  //   // Вывод кол-ва цветов в консоль
  //   var flo_console_number = function() {
  //     console.log("Количество: " + flo_number);
  //   };
  //
  //   // Изменение обложек
  //   var flo_color_retern_red = function() {
  //     $(".pick.item_1").css('background-image', 'url(img/constr/1_red/red/19.png)');
  //     $(".pick.item_2").css('background-image', 'url(img/constr/1_red/red/29.png)');
  //     $(".pick.item_3").css('background-image', 'url(img/constr/1_red/red/39.png)');
  //     $(".pick.item_4").css('background-image', 'url(img/constr/1_red/red/59.png)');
  //     $(".pick.item_5").css('background-image', 'url(img/constr/1_red/red/101.png)');
  //     $(".pick.item_6").css('background-image', 'url(img/constr/1_red/red/201.png)');
  //     $(".pick.item_7").css('background-image', 'url(img/constr/1_red/red/301.png)');
  //     $(".pick.item_8").css('background-image', 'url(img/constr/1_red/red/501.png)');
  //     $(".pick.item_9").css('background-image', 'url(img/constr/1_red/red/1001.png)');
  //   };
  //
  //   var flo_color_retern_pink = function() {
  //     $(".pick.item_1").css('background-image', 'url(img/constr/1_red/pink/19.png)');
  //     $(".pick.item_2").css('background-image', 'url(img/constr/1_red/pink/29.png)');
  //     $(".pick.item_3").css('background-image', 'url(img/constr/1_red/pink/39.png)');
  //     $(".pick.item_4").css('background-image', 'url(img/constr/1_red/pink/59.png)');
  //     $(".pick.item_5").css('background-image', 'url(img/constr/1_red/pink/101.png)');
  //     $(".pick.item_6").css('background-image', 'url(img/constr/1_red/pink/201.png)');
  //     $(".pick.item_7").css('background-image', 'url(img/constr/1_red/pink/301.png)');
  //     $(".pick.item_8").css('background-image', 'url(img/constr/1_red/pink/501.png)');
  //     $(".pick.item_9").css('background-image', 'url(img/constr/1_red/pink/1001.png)');
  //   };
  //
  //   var flo_color_retern_yell = function() {
  //     $(".pick.item_1").css('background-image', 'url(img/constr/1_red/yell/19.png)');
  //     $(".pick.item_2").css('background-image', 'url(img/constr/1_red/yell/29.png)');
  //     $(".pick.item_3").css('background-image', 'url(img/constr/1_red/yell/39.png)');
  //     $(".pick.item_4").css('background-image', 'url(img/constr/1_red/yell/59.png)');
  //     $(".pick.item_5").css('background-image', 'url(img/constr/1_red/yell/101.png)');
  //     $(".pick.item_6").css('background-image', 'url(img/constr/1_red/yell/201.png)');
  //     $(".pick.item_7").css('background-image', 'url(img/constr/1_red/yell/301.png)');
  //     $(".pick.item_8").css('background-image', 'url(img/constr/1_red/yell/501.png)');
  //     $(".pick.item_9").css('background-image', 'url(img/constr/1_red/yell/1001.png)');
  //   };
  //
  //   var flo_color_retern_white = function() {
  //     $(".pick.item_1").css('background-image', 'url(img/constr/1_red/white/19.jpg)');
  //     $(".pick.item_2").css('background-image', 'url(img/constr/1_red/white/29.jpg)');
  //     $(".pick.item_3").css('background-image', 'url(img/constr/1_red/white/39.jpg)');
  //     $(".pick.item_4").css('background-image', 'url(img/constr/1_red/white/59.jpg)');
  //     $(".pick.item_5").css('background-image', 'url(img/constr/1_red/white/101.jpg)');
  //     $(".pick.item_6").css('background-image', 'url(img/constr/1_red/white/201.jpg)');
  //     $(".pick.item_7").css('background-image', 'url(img/constr/1_red/white/301.jpg)');
  //     $(".pick.item_8").css('background-image', 'url(img/constr/1_red/white/501.jpg)');
  //     $(".pick.item_9").css('background-image', 'url(img/constr/1_red/white/1001.jpg)');
  //   };
  //
  //   var flo_color_rose_on = function() {
  //     $(".pick_color").css("display", "none");
  //     $(".pick_color_rose").css("display", "block");
  //   };
  //
  //   var flo_size_off = function() {$(".pick_size").css("display", "none");};
  //   var flo_size_on = function() {$(".pick_size").css("display", "block");};
  //
  //   // Выбор - обычные розы
  //   $('#btn_rose').click(function(){
  //
  //     // Переход к выбору
  //     step_on_2();
  //     flo_autolot();
  //     flo_color_retern_red();
  //     flo_color_rose_on();
  //
  //     $(".size_60").text("60");
  //     $(".size_70").text("70");
  //     $(".size_80").text("80");
  //
  //     // Вывод
  //     flo_name = "Обычные розы";
  //     flo_color = "Красные";
  //     console.log("Выбор: " + flo_name);
  //
  //     // Изменение цветов
  //     // Крассные розы
  //     $(".color_box.red").click(function() {
  //       flo_color_retern_red();
  //       flo_color = "Красные";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Синии розы
  //     $(".color_box.pink").click(function() {
  //       flo_color_retern_pink();
  //       flo_color = "Розовые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Желтые розы
  //     $(".color_box.yell").click(function() {
  //       flo_color_retern_yell();
  //       flo_color = "Желтые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Белые розы
  //     $(".color_box.white").click(function() {
  //       flo_color_retern_white();
  //       flo_color = "Белые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Размер
  //     $(".color_box.size_60").click(function() {
  //       flo_size = 60;
  //       console.log("Размер: " + flo_size);
  //       $(".size_box").removeClass("active");
  //       $(this).addClass("active");
  //     });
  //
  //     $(".color_box.size_70").click(function() {
  //       flo_size = 70;
  //       console.log("Размер: " + flo_size);
  //       $(".size_box").removeClass("active");
  //       $(this).addClass("active");
  //     });
  //
  //     $(".color_box.size_80").click(function() {
  //       flo_size = 80;
  //       console.log("Размер: " + flo_size);
  //       $(".size_box").removeClass("active");
  //       $(this).addClass("active");
  //     });
  //   });
  //
  //   $('#btn_kyst').click(function(){
  //     step_on_2();
  //     flo_autolot_3item();
  //     flo_size_off();
  //     flo_3_off();
  //     flo_size_box_off();
  //
  //     flo_name = "Розы кустовые";
  //     flo_color = "Красные";
  //     console.log("Выбор: " + flo_name);
  //
  //     $(".color_box.red").click(function() {
  //       flo_color = "Красные";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Синии розы
  //     $(".color_box.white").click(function() {
  //       flo_color = "Белые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Желтые розы
  //     $(".color_box.pink").click(function() {
  //       flo_color = "Розовые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     // Белые розы
  //     $(".color_box.pers").click(function() {
  //       flo_color = "Персиковые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //
  //     $(".color_box.orang").click(function() {
  //       flo_color = "Ораньжевые";
  //       console.log("Цвет: " + flo_color);
  //     });
  //   });
  //
  //   // Кол-во цветов
  //   $(".constr_step_2 .pick.item_1 .btn_apply").click(function(){
  //     if (flo_name == "Розы кустовые") {
  //       flo_number = 39;
  //     } else {
  //       flo_number = 19;
  //     };
  //   });
  //
  //   $(".constr_step_2 .pick.item_2 .btn_apply").click(function(){
  //     if (flo_name == "Розы кустовые") {
  //       flo_number = 51;
  //     } else {
  //       flo_number = 29;
  //     };
  //   });
  //   $(".constr_step_2 .pick.item_3 .btn_apply").click(function(){
  //     if (flo_name == "Розы кустовые") {
  //       flo_number = 101;
  //     } else {
  //       flo_number = 19;
  //     };
  //   });
  //
  //   $(".constr_step_2 .pick.item_4 .btn_apply").click(function(){flo_number = 59;});
  //   $(".constr_step_2 .pick.item_5 .btn_apply").click(function(){flo_number = 101;});
  //   $(".constr_step_2 .pick.item_6 .btn_apply").click(function(){flo_number = 201;});
  //   $(".constr_step_2 .pick.item_7 .btn_apply").click(function(){flo_number = 301;});
  //   $(".constr_step_2 .pick.item_8 .btn_apply").click(function(){flo_number = 501;});
  //   $(".constr_step_2 .pick.item_9 .btn_apply").click(function(){flo_number = 1001;});
  //
  //   // Функция вывода информации об заказе
  //
  //   // Фикс стоимость роз
  //   var result_rose;
  //   var cost = function() {
  //     if (flo_size == 60 && flo_number == 19) {result_rose = 2000};
  //     if (flo_size == 70 && flo_number == 19) {result_rose = 2200};
  //     if (flo_size == 80 && flo_number == 19) {result_rose = 2400};
  //
  //     if (flo_size == 60 && flo_number == 29) {result_rose = 2600};
  //     if (flo_size == 70 && flo_number == 29) {result_rose = 2900};
  //     if (flo_size == 80 && flo_number == 29) {result_rose = 3200};
  //
  //     if (flo_size == 60 && flo_number == 39) {result_rose = 3200};
  //     if (flo_size == 70 && flo_number == 39) {result_rose = 3500};
  //     if (flo_size == 80 && flo_number == 39) {result_rose = 3800};
  //
  //     if (flo_size == 60 && flo_number == 59) {result_rose = 3700};
  //     if (flo_size == 70 && flo_number == 59) {result_rose = 4000};
  //     if (flo_size == 80 && flo_number == 59) {result_rose = 4300};
  //
  //     if (flo_size == 60 && flo_number == 101) {result_rose = 6000};
  //     if (flo_size == 70 && flo_number == 101) {result_rose = 6500};
  //     if (flo_size == 80 && flo_number == 101) {result_rose = 7000};
  //
  //     if (flo_size == 60 && flo_number == 201) {result_rose = 13000};
  //     if (flo_size == 70 && flo_number == 201) {result_rose = 14500};
  //     if (flo_size == 80 && flo_number == 201) {result_rose = 16000};
  //
  //     if (flo_size == 60 && flo_number == 301) {result_rose = 18000};
  //     if (flo_size == 70 && flo_number == 301) {result_rose = 20000};
  //     if (flo_size == 80 && flo_number == 301) {result_rose = 22000};
  //
  //     if (flo_size == 60 && flo_number == 501) {result_rose = 45000};
  //     if (flo_size == 70 && flo_number == 501) {result_rose = 45000};
  //     if (flo_size == 80 && flo_number == 501) {result_rose = 45000};
  //
  //     if (flo_size == 60 && flo_number == 1001) {result_rose = 65000};
  //     if (flo_size == 70 && flo_number == 1001) {result_rose = 65000};
  //     if (flo_size == 80 && flo_number == 1001) {result_rose = 65000};
  //   };
  //
  //   // Доп
  //   $(".dop_block_center_1 .btn_apply").click(function(){
  //     $(".dop_block_center_4 .btn_apply").removeClass("active");
  //     $(this).addClass("active");
  //
  //     btm_ap_1 = 200;
  //     flower_result_rose();
  //   });
  //
  //   $(".dop_block_center_2 .btn_apply").click(function(){
  //     $(this).addClass("active");
  //     $(".dop_block_center_4 .btn_apply").removeClass("active");
  //
  //     btm_ap_2 = 200;
  //     flower_result_rose();
  //   });
  //
  //   $(".dop_block_center_3 .btn_apply").click(function(){
  //     $(".dop_block_center_4 .btn_apply").removeClass("active");
  //     $(this).addClass("active");
  //
  //     btm_ap_3 = 200;
  //     flower_result_rose();
  //   });
  //
  //   $(".dop_block_center_4 .btn_apply").click(function(){
  //     $(".btn_apply").removeClass("active");
  //     $(this).addClass("active");
  //
  //     btm_ap_1 = 0;
  //     btm_ap_2 = 0;
  //     btm_ap_3 = 0;
  //     btm_ap_5 = 0;
  //     btm_ap_6 = 0;
  //     flower_result_rose();
  //   });
  //
  //   $(".dop_block_center_5 .btn_apply").click(function(){
  //     $(".dop_block_center_4 .btn_apply").removeClass("active");
  //     $(this).addClass("active");
  //
  //     btm_ap_5 = 1500;
  //     flower_result_rose();
  //   });
  //
  //   $(".dop_block_center_6 .btn_apply").click(function(){
  //     $(".dop_block_center_4 .btn_apply").removeClass("active");
  //     $(this).addClass("active");
  //
  //     btm_ap_6 = 1000;
  //     flower_result_rose();
  //   });
  //
  //   var flower_result_rose = function() {
  //     $(".flower_item_name").text(flo_name);
  //     $(".flower_item_color").text(flo_color);
  //     $(".flower_item_size").text(flo_size);
  //     $(".flower_item_number").text(flo_number);
  //
  //     console.log("Общая информация об заказе:");
  //     console.log("Название: " + flo_name);
  //     console.log("Цвет: " + flo_color);
  //     console.log("Размер: " + flo_size);
  //     console.log("Количество: " + flo_number);
  //
  //     $(".result").text(result_rose + btm_ap_1 + btm_ap_2 + btm_ap_3 + btm_ap_5 + btm_ap_6);
  //     var res = $(".result").text();
  //
  //     console.log("Стоимость: " + res);
  //   };
  //
  //   // Подсчет кол-ва
  //   $(".constr_step_2 .pick .btn_apply").click(function(){
  //     if (flo_name == "Обычные розы") {
  //       flo_console_number();
  //       cost();
  //
  //       if (flo_size != undefined) {
  //         if (flo_color == "Красные") {
  //           $(".flower_albom").css('background-image', 'url(img/constr/1_red/red/'+flo_number+'.png)');
  //         };
  //
  //         if (flo_color == "Розовые") {
  //           $(".flower_albom").css('background-image', 'url(img/constr/1_red/pink/'+flo_number+'.png)');
  //         };
  //
  //         if (flo_color == "Желтые") {
  //           $(".flower_albom").css('background-image', 'url(img/constr/1_red/yell/'+flo_number+'.png)');
  //         };
  //
  //         if (flo_color == "Белые") {
  //           $(".flower_albom").css('background-image', 'url(img/constr/1_red/white/'+flo_number+'.jpg)');
  //         };
  //
  //         step_on_3();
  //         flower_result_rose();
  //
  //         if (screen.width < 992) {$(".constr").css("min-height", "2000px");};
  //       } else {
  //         alert("Выберите размер");
  //       };
  //     };
  //
  //     // Кустовые розы
  //     if (flo_name == "Розы кустовые") {
  //       if (flo_color == "Красные") {
  //         $(".flower_albom").css('background-image', 'url(img/constr/2_kyst/red/'+flo_number+'.png)');
  //       };
  //
  //       if (flo_color == "Белые") {
  //         $(".flower_albom").css('background-image', 'url(img/constr/2_kyst/red/'+flo_number+'.png)');
  //       };
  //
  //       if (flo_color == "Розовые") {
  //         $(".flower_albom").css('background-image', 'url(img/constr/2_kyst/red/'+flo_number+'.png)');
  //       };
  //
  //       if (flo_color == "Персиковые") {
  //         $(".flower_albom").css('background-image', 'url(img/constr/2_kyst/red/'+flo_number+'.png)');
  //       };
  //
  //       if (flo_color == "Ораньжевые") {
  //         $(".flower_albom").css('background-image', 'url(img/constr/2_kyst/red/'+flo_number+'.png)');
  //       };
  //
  //       step_on_3();
  //     };
  //
  //     // Розы гиганты
  //
  //   });
  //
  //   // Модуль вывода
  //
  // });
});
