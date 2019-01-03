
//这里代码多了几行，但是不会延迟显示，速度比较好，格式可以自定义，是理想的时间显示

$(function () {
    $('#totop').goToTop();
});

//回到顶部
jQuery.fn.goToTop = function(){
    $('#totop').hide();

    // 判断如果窗口滚动距离小于0，隐藏按钮
    if($(window).scrollTop() < 60){
        $('#totop').hide();
    }

    // 窗口滚动时，判断当前窗口滚动距离
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $('#totop').show();
            $('#nav').addClass("red-bg");
        }else{
            $('#totop').hide();
            $('#nav').removeClass("red-bg");
        }
    });

    // 给这个按钮绑定一个click事件
    this.bind('click',function(){
        $('html ,body').animate({scrollTop: 0},500);
        return false;
    });
};


function getCurDate()
    {
        var d = new Date();

        var hours = add_zero(d.getHours());
        var minutes = add_zero(d.getMinutes());
        var seconds=add_zero(d.getSeconds());
        var ndate = hours+":"+minutes+":"+seconds;
        var divT=document.getElementById("datetime");
        divT.innerHTML= ndate;
    }
function add_zero(temp)
    {
        if(temp<10) return "0"+temp;
        else return temp;
    }
setInterval("getCurDate()",100);





