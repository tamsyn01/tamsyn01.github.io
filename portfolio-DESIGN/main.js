$(function(){
    console.log("I'm ready now");
    
    var num = ["one", "two", "three"];

    function randomClass() {
        $(".feature").each(function () {
            $(this).removeClass(num);
            $(this).addClass(num[Math.floor(Math.random() * num.length)]);
        // });
        // $(".text").each(function () {
        //     $(this).removeClass(abc);
        //     $(this).addClass(abc[Math.floor(Math.random() * abc.length)]);
        // });
        // $(".text").each(function () {
        //     $(this).removeClass(xyz);
        //     $(this).addClass(xyz[Math.floor(Math.random() * xyz.length)]);
        });                
        setTimeout(randomClass, 1000)
    }

    randomClass();

});
