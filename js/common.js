$(function() {
    'use strict';

    $("header").load("header.html");
    $("nav").load("nav.html");
    $("footer").load("footer.html");

    var home_page = $(".home_page");
    var clinic_page = $(".clinic_page");
    var doctor_page = $(".doctor_page");
    var contents_page = $(".contents_page");
    var faq_page = $(".faq_page");
    var recruit_page = $(".recruit_page");
    var access_page = $(".access_page");

    var header_box = $('header');
    var nav_li = $("#nav_ul").find("li:last");
    var userAgent = window.navigator.userAgent; 


    //現在ページのnavのボタンに色を付けるためにaddClassをする処理。
    //下記の、nav_li_colorは、nav.cssにあります。
    $.ajax({
      type:'GET',
      url:'./nav.html',
      dataType:'html'
    })
    .then(
        //通信成功時
        function(data){   
            if(home_page.length) {
                $('.home').addClass("nav_li_color");
            };
            if(clinic_page.length) {
                $(".clinic").addClass("nav_li_color");
            };
            if(doctor_page.length) {
                $(".doctor").addClass("nav_li_color");
            };
            if(contents_page.length) {
                $(".contents").addClass("nav_li_color");
            };
            if(faq_page.length) {
                $(".faq").addClass("nav_li_color");
            };
            if(recruit_page.length) {
                $(".recruit").addClass("nav_li_color");
            };
            if(access_page.length) {
                $(".access").addClass("nav_li_color");
            };
        },
        //通信失敗時
        function(){
            //alert("読み込み失敗");
        }
    );



    //画面幅が800px未満の時、
    //メニューボタンをクリックしたら。
    //下記の、opennavは、nav.cssにあります。
    $.ajax({
        type:'GET',
        url:'./header.html',
        dataType:'html'
      })
      .then(
          //通信成功時
          function(data){
            var nav_btn = header_box.find(".nav_btn");
            var machijikan = header_box.find(".machijikan").html();

            //サファリ・IE判定(IE11とIE10以前)。
            if(userAgent.indexOf('safari') != -1 || userAgent.indexOf('Trident') != -1 || userAgent.indexOf('MSIE') != -1) {
                $(document).on("click", ".nav_btn", function() {
                    $("nav").toggleClass("opennav");
                    $("main").toggleClass("openmain");
                  });
            };

            nav_btn.focusin(function(e) {
                $("nav").addClass("opennav");
                $("main").addClass("openmain");
            }).focusout(function(e) {
                $("nav").removeClass("opennav");
                $("main").removeClass("openmain");
            });


          },
          //通信失敗時
          function(){
              //alert("読み込み失敗");
          }
      );
  

    
    /* ========↓↓↓　ここから　スクロールしたらTOPへのボタンを表示する======= */
    var topBtn = $('#page_top');    
    topBtn.hide();
    //スクロールが400に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    $('a[href^="#"]').click(function(){
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

    /* ========↑↑↑ ここまで　スクロールしたらTOPへのボタンを表示する======= */


    //閲覧しているブラウザの情報（ユーザーエージェント）を取得
    var userAgent = window.navigator.userAgent; 


    /*============= ↓IEハック =============*/
    //IE判定(IE11とIE10以前)。
    $(window).on("load resize", function() {
        if(userAgent.indexOf('Trident') != -1 || userAgent.indexOf('MSIE') != -1){
            var header = $("header");
            var winwid = $(window).outerWidth();
            if(winwid >= 800){
                $("nav").css({
                    "position":"static"
                });
            } else {
                $("nav").css({
                    "position":"fixed",
                    "top": 65 + "px",
                    "left": winwid - 302 + "px",
                    "right": 0 + "px"
                });
            };
            $(window).scroll(function() {
                let scrollthis = $(this).scrollTop(); 
                if(winwid <= 1000 && winwid >= 800 && scrollthis > 90){
                    $("nav").css({
                        "position":"fixed",
                        "top": 0 + "px",
                        "left": 0 + "px"
                    });
                } else if(winwid <= 1000 && winwid >= 800 && scrollthis <= 90){
                    $("nav").css({
                        "position":"static"
                    });
                } else if(winwid > 1000 && scrollthis > 120) {
                    $("nav").css({
                        "position":"fixed",
                        "top": 0 + "px",
                        "left": 0 + "px"
                    });
                } else if (winwid > 1000 && scrollthis <= 120) {
                    $("nav").css({
                        "position":"static"
                    });
                } else if(winwid < 800){
                    $("nav").css({
                        "position":"fixed",
                        "top": 65 + "px",
                        "left": winwid - 302 + "px",
                        "right": 0 + "px"
                    });
                };
            });
        };
    });
/*============= ↑IEハック =============*/


});

