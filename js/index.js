
$(function(){
    $('.fixed').on('click',function(e){
        e.preventDefault();
        // console.log($('.one').outerHeight(true))
        $('.hid').css({left:'0%'})
    })

    $('.vis').on('click',function(e){
        e.preventDefault();
        $('.hid').css({left:'100%'})
    })

    $('.flx article a:nth-of-type(1) h1').on('click',function(e){
        e.preventDefault()
        $('body,html').animate({'scrollTop':'00px'},1000);
        $('.hid').animate({left:'100%'})
    })   
    $('.flx article a:nth-of-type(2) h1').on('click',function(e){
        e.preventDefault()
        let top = $('.profile').offset().top;
        $('body,html').animate({'scrollTop':top},1000);
        $('.hid').animate({left:'100%'})
    })    
        
    $('.flx article a:nth-of-type(3) h1').on('click',function(e){
        e.preventDefault()
        let mid = $('.three').offset().top;
        $('body,html').animate({'scrollTop':mid},1000);
        $('.hid').animate({left:'100%'})
    })   
          
    $('.flx article a:nth-of-type(4) h1').on('click',function(e){
        e.preventDefault()
        let end = $('.last').offset().top
        $('body,html').animate({'scrollTop':end},1000);
        $('.hid').animate({left:'100%'})
    })  

    $('.com p a').on('click',function(e){
        e.preventDefault();
        let top = $('.profile').offset().top;
        $('body,html').animate({'scrollTop':top},500);
    })
         
    

  
    $('.active span').on('click',function(){
        $('.awesome').removeClass('block');
    })


    $.ajax({
        url:'data.json',
        success:function(data){
            var title,thum,num,imgSrc,url,txt,view,tagList='',tagThum='',tagBig='', tagSmall='',idx=0;

            function dataFun(ty){
                tagList = '';
                tagThum ='';
                tagBig = '';
                tagSmall='';
                data.gallery.forEach(function(value,key){
                    title = value.title;
                    thum = value.thum;
                    num = value.num;
                    imgSrc = value.imgSrc;
                    url = value.url;
                    txt = value.txt;
                    view = value.view;

                    tagList += "<div>" + title + "</div>";
                    

                    let loadImg = new Image();
                    loadImg.src = thum;
                    let loadImg2 = new Image();
                    loadImg2.src = imgSrc;
                
                })
                $('.slide .txt').html(tagList);
               

                $('.slide .txt div').on('click',function(){
                    idx = $(this).index();
                    $('.slide .txt div').removeClass('alpha')
                    $(this).addClass('alpha');

                    $('.slide .bg div').removeClass('beta');                    
                    setTimeout(function(){
                        $('.slide .bg div').addClass('beta');
                        setTimeout(function(){
                           
                            $('.slide .bg div').css({
                                'background-image':'url('+  data.gallery[idx].thum +')'
                            });
                        },700)
                    },10)

                    $('.slide p').text(data.gallery[idx].num);
                })
                $('.slide .bg').on('click',function(){
                    $('.awesome').addClass('block');
                   
                    imgSrc=data.gallery[idx].imgSrc
                    txt=data.gallery[idx].txt
                    url=data.gallery[idx].url
                    view=data.gallery[idx].view

                    tagBig = "<img src="+imgSrc+">"

                    tagSmall = "<p>" + txt + "</p>"
                    tagSmall += "<a href="+url +" target='_blank'>"
                    tagSmall += "<span>" +view + "</span>"
                    tagSmall += "</a>"

                    

                    $('.active figure').html(tagBig);
                    $('.active div').html(tagSmall);
                    
                })

               
            }
            dataFun('all');
        }
    })

    $(window).on('scroll',function(){

        var scrTop = $(window).scrollTop();
        var winHei = $(window).height();
        $('section').each(function(){
           section = $('section').eq(2).offset().top;
        })

     
    })

    
      $('.first :header').textyle({
          duration : 200,
          easing : 'swing'
      });

      

      $(window).on('scroll',function(){

        var winHei = $(window).height();
        var objHei = $('.three article').offset().top;
        var scrTop = $(this).scrollTop();

        if(objHei - winHei < scrTop){
            $('.three article :header').textyle({
                duration : 2000,
                easing : 'swing'
            })
        }

      })

    $(window).on('scroll',function(){

        var winHei = $(window).height();
        var objHei = $('.abt').offset().top;
        var scrTop = $(this).scrollTop();

        if(objHei - winHei < scrTop){
            $('.abt :header').textyle({
                duration : 2000,
                easing : 'swing'
            });
        }
        
        
    })


    $(window).on('scroll',function(){

        var winHei = $(window).height();
        var objHei = $('.last > article').offset().top;
        var scrTop = $(this).scrollTop();

        if(objHei - winHei < scrTop){
            $('.last > article :header').textyle({
                duration : 2000,
                easing : 'swing'
            });
        }
        
        
    })
      


      setTimeout(function(){
        $('.first h1 strong').textyle({
            duration : 2500,
            easing : 'swing'

        });  
      },1500)

      
      $(window).ready(function(){
        $('.txt div').eq(0).addClass('alpha')
        setTimeout(function(){
            $('.big_img img').fadeIn();
        },400)
        setTimeout(function(){
            $('.round .scroll').fadeIn()
        },1000)
        
      })

      $('.round a').on('click',function(e){
          e.preventDefault()
        $('.box').toggleClass('bot');
      })

      $(window).on('mousewheel',function(){
          
            var win_h = $(window).height();
            var sec_h1 = $('.profile').offset().top;
            var scr_top = $(this).scrollTop();

            if(sec_h1 - win_h < scr_top){
                $('.mid').addClass('sub');
            }
      })

      function setResponsive(){
          if(matchMedia('only screen and (max-width:480px)').matches){
              $('body,html').animate({'scrollTop' :'1000px'})
          }
      }

      setResponsive();


})
