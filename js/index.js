$(function(){
    $('.search').on('click',function(){
        $('.header').addClass('searching');
    })
    $('.bag').on('click',function(){
        $('.header').removeClass('searching');
    })

    $('.buttonlr').on('mouseenter',function(){
        $('.buttonlr').addClass('btnxian')
    })
    $('.buttonlr').on('mouseleave',function(){
        $('.buttonlr').removeClass('btnxian')
    })
    var pflag=true;
    $('.bread').on('click',function(){
    if(pflag){
        pflag=false;
            $('.phone-list').toggleClass('chuxian').removeClass('xiaoshi');

        return;
    }else{
            $('.phone-list').removeClass('chuxian').toggleClass('xiaoshi');
        pflag=true;
        }
    })

    var asban=$('.gallery a');
    var mflag=false;
    var moveTo=function(el,dir){
        if(!mflag){
            mflag=true;
            if(dir==='right'){
                asban.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function(){
                    mflag=false;
                    $(this).removeClass('leave').dequeue();
                });
                $(el).addClass('right');
                $(el).get(0).offsetWidth;
                $(el).removeClass('right').addClass('active');
            }else if(dir==='left'){
                asban.filter('.active').removeClass('active').addClass('enter').delay(1000).queue(function(){
                    mflag=false;
                    $(this).removeClass('enter').dequeue();
                });
                $(el).addClass('left');
                $(el).get(0).offsetWidth;
                $(el).removeClass('left').addClass('active');
            }
        }

        $('.docs .xi').removeClass('active').eq(asban.index(el)).addClass('active')
    }

   var moveRight=function(){
        var active=asban.filter('.active');
       //有下一个，用下一个;没有  用第一张
        var el=active.next().length ? active.next() : asban.eq(0);
        moveTo(el,'right')
    }
   var moveLeft=function(){
        var active=asban.filter('.active');
        var el=active.prev().length ? active.prev() : asban.eq(-1);
        moveTo(el,'left')
    }
    var whelltime=setInterval(moveRight,2000);
    $('.docs').on('click',function(){
        var m=asban.filter('.active').index();
        console.log(m)
        //当前图片下标
        var n=$(this).index()
        console.log(n)
        var el=asban.eq(n);
        if(n>m){
            moveTo(el,'right');
        }else if(n<m){
            moveTo(el,'left');
        }else if(n=m){
            return;
        }
        clearInterval(whelltime);
    })

    $('.whleft').on('click',function(){
        moveLeft();
        clearInterval(whelltime);

    })
    $('.whright').on('click',function(){
        moveRight();
        clearInterval(whelltime);

    })

    $('.buttonlr').on('mousedown',false);
    $('h3').on('mousedown',false);


    $('.footer2-inner ul').on('click',function () {
        $(this).find('.shi').toggleClass('cha');
        $(this).find('li').slideToggle();
    })
})