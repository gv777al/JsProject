function getaction()
    {
    var p = document.getElementById ('number').value;
    var a = 1234;
    //შესამოწმებელია სწორად არის თუ არა შეყვანილი პინკოდი
    if(p==a)
    {
    document.getElementById ("demo").innerHTML ="აირჩიეთ ოპერაცია";
    document.getElementById ('options12'). style.display = 'block'; 
    }
    else
    {
    document.getElementById ("demo").innerHTML = "პინკოდი არასწორია";
    }
    }
    function myfunction(val)
    {
    //ბალანსის კოდი
    m = 10000;
    if(val==1)
    {
    document.getElementById ('demo1' ).innerHTML ="ბალანსი: "+m;
    document.getElementById ('display' ). style.display = 'none';
    document.getElementById ('display1' ). style.display = 'none';
    }
    if(val==2)
    {
    document.getElementById ('display').style.display = 'block';
    document.getElementById ('display1').style.display = 'none';
    }
    if(val==3)
    {
    document.getElementById ('display1').style.display = 'block';
    document.getElementById ('display').style.display = 'none';
    }
    }
    function getamount()
    {

    // ფულის გატანის კოდი
    m = 10000;
    var a = document.getElementById ('amount1' ).value;
    if(a<=m&&a%100==0)
    document.getElementById ('display').innerHTML ="მიღებული თანხა : "+a;
    else
    document.getElementById ('display').innerHTML ="შეუძლებელი ოპერაცია";
    }
    function getamount1()
    {

    //ფულის შეტანის კოდი
    var x = document.getElementById ("myselect1").value
    m = 10000;
    if(x<=20000)
    document.getElementById ('display1').innerHTML ="ფული შეტანილია: "+x;
    else
    document.getElementById ('display1').innerHTML ="ოპერაცია ვერ შესრულდა";
    }