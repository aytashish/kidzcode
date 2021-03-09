// alert("working");
var header = document.getElementById('header');
var logo = document.getElementById('logo');
var bookClassBtn = document.getElementById('bookFreeClass');

var codingTabs = document.getElementById('codingTabs');
var roboticsTabs = document.getElementById('roboticsProgramTabs');


// =========robotics course btn=========
var basicRoboticsButton = document.getElementById('basicRoboticsBtn');
var intermediateRoboticsButton = document.getElementById('IntermediateRoboticsBtn');

var robotic_course = document.querySelector('.robotic_course')
var robotic_course2 = document.querySelector('.Intermediate_robotic_course')

// =======robotics content======
var Intermediate_Content = document.querySelector('.Intermediate_course');
var Intermediate_advance_Content = document.querySelector('.Intermediate_advance');


window.onscroll = function () {
    if(window.scrollY > 100){
        header.classList.add('scrolled');
        logo.classList.add('scrolled');
        bookClassBtn.classList.add('scrolled');
    }else{
        header.classList.remove('scrolled');
        logo.classList.remove('scrolled');
        bookClassBtn.classList.remove('scrolled');
    }

    // ====fixed tabs=======

    // ---coding page----
    if(window.scrollY > 2000){
        // roboticsTabs.classList.add('scrolled');
        codingTabs.classList.add('scrolled');
    }else{
        // roboticsTabs.classList.remove('scrolled');
        codingTabs.classList.remove('scrolled');
    }

    // ---robotics page----
    
    // if(window.scrollY > 2000){
    //     roboticsTabs.classList.add('scrolled');
    // }else{
    //     roboticsTabs.classList.remove('scrolled');
    // }

    


}



window.addEventListener('DOMContentLoaded',() => {
    const overlay = document.querySelector('#overlay');
    const closeModal = document.querySelector('#closeModal');
    const openModal = document.querySelector('#ToggleModel');
    openModal.addEventListener('click',() =>{
        //  alert("working");
         overlay.classList.toggle('hidden');
         overlay.classList.toggle('flex');
    })
    closeModal.addEventListener('click',() =>{
        // alert("working close");
        overlay.classList.toggle('hidden');
        overlay.classList.toggle('flex');
        
   })
})


// ========owl carousel===========

$(document).ready(function(){
   $(".message_section .owl-carousel").owlCarousel({
       autoplay: true,
       autoplayHoverPause: true,
       // items: 4,
       dots: true,
       nav: true,
       loop: true,
       responsive: {
           0:{
               items: 1,
               dots: true,
               nav: true,
           },
           485:{
               items: 1,
               dots: true,
               nav: false,
           },
           728:{
               items: 1,
               dots: true,
               
           },
           960:{
               items: 1,
               dots: true,
              
           },
           1200:{
               items: 1,
               dots: true,
               nav: true,
           }
       }
   });

//    ========banner carousel=======
    $(".banner_carousel .owl-carousel").owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        // items: 4,
        dots: true,
        nav: false,
        loop: true,
        responsive: {
            0:{
                items: 1
            },
            485:{
                items: 1
            },
            728:{
                items: 1
            },
            960:{
                items: 1
            },
            1200:{
                items: 1
            }
        }
    });


    // ==============robotics page==============
    console.log("robotic_course active")
    robotic_course.classList.add("active");
    // Intermediate_Content.classList.remove("hidden");
    // Intermediate_Content.classList.add("block");

    // Intermediate_advance_Content.classList.add("hidden");

    basicRoboticsButton.onclick  = () => {
        // alert("working")
        robotic_course.classList.add("active");
        // Intermediate_Content.classList.add("active");
        robotic_course2.classList.remove("active");

        // ======content=======
        
        Intermediate_Content.classList.add("block");

        Intermediate_Content.classList.remove("hidden");

        Intermediate_advance_Content.classList.add("hidden");
        // Intermediate_advance_Content.classList.remove("block");
        
    }

    intermediateRoboticsButton.onclick  = () => {
        // alert("working")
        robotic_course.classList.remove("active");
        robotic_course2.classList.add("active");

        // ======content=======
        Intermediate_Content.classList.remove("block");
        Intermediate_Content.classList.add("hidden");
        // Intermediate_Content.classList.remove("block");

        Intermediate_advance_Content.classList.add("block");
        Intermediate_advance_Content.classList.remove("hidden");
        
    }

    
});

// ===================coding page=================

// ================coding page=================
var pythonBtn = document.getElementById('pythonTab');
var javaBtn = document.getElementById('javaTab');
var webBtn = document.getElementById('webDesignTab');

var pythonTabActive = document.querySelector('.pythonPills')
var javaTabActive = document.querySelector('.javaPills')
var webTabActive = document.querySelector('.webPills')

// =====content==========
var pythonContent = document.querySelector('.pythonTabContent');
var javaContent = document.querySelector('.javaTabContent');
var webContent = document.querySelector('.webTabContent');

$(document).ready(function(){
    pythonTabActive.classList.add('active');
})

pythonBtn.onclick = () => {
    // alert("python tab working...");
    pythonTabActive.classList.add('active');
    javaTabActive.classList.remove('active');
    webTabActive.classList.remove('active');

    // ========content==============

    // -----add------
    javaContent.classList.add('hidden');
    webContent.classList.add('hidden');
    pythonContent.classList.add('block');

    // -----remove--------
    pythonContent.classList.remove('hidden');
    
    
}

javaBtn.onclick = () => {
    // alert("java tab working...");
    javaTabActive.classList.add('active');
    pythonTabActive.classList.remove('active');
    webTabActive.classList.remove('active');

    // =====content========
    
    // ------add-------
    pythonContent.classList.add('hidden');
    webContent.classList.add('hidden');
    // javaContent.classList.remove('hidden');

    // -----remove-----
    javaContent.classList.remove('hidden');
    

}

webBtn.onclick = () => {
    // alert("web tab working...");
    webTabActive.classList.add('active');
    pythonTabActive.classList.remove('active');
    javaTabActive.classList.remove('active');

     // =====content========

    //  -----remove-----
     webContent.classList.remove('hidden');

    //  -----add-----
    javaContent.classList.add('hidden');
    pythonContent.classList.add('hidden');
     
}


// ==============python week tab================

var pythonWeek1Tab = document.getElementById('pythonWeek1');
var pythonWeek2Tab = document.getElementById('pythonWeek2');
var pythonWeek3Tab = document.getElementById('pythonWeek3');
var pythonWeek4Tab = document.getElementById('pythonWeek4');
var pythonWeek5Tab = document.getElementById('pythonWeek5');
var pythonWeek6Tab = document.getElementById('pythonWeek6');
var pythonWeek7Tab = document.getElementById('pythonWeek7');
var pythonWeek8Tab = document.getElementById('pythonWeek8');
var pythonWeek9Tab = document.getElementById('pythonWeek9');
var pythonWeek10Tab = document.getElementById('pythonWeek10');
var pythonWeek11Tab = document.getElementById('pythonWeek11');
var pythonWeek12Tab = document.getElementById('pythonWeek12');


// =============active background color pills============
var pythonweek1Active = document.querySelector('.pythonweek1Pills');
var pythonweek2Active = document.querySelector('.pythonweek2Pills');
var pythonweek3Active = document.querySelector('.pythonweek3Pills');
var pythonweek4Active = document.querySelector('.pythonweek4Pills');
var pythonweek5Active = document.querySelector('.pythonweek5Pills');
var pythonweek6Active = document.querySelector('.pythonweek6Pills');
var pythonweek7Active = document.querySelector('.pythonweek7Pills');
var pythonweek8Active = document.querySelector('.pythonweek8Pills');
var pythonweek9Active = document.querySelector('.pythonweek9Pills');
var pythonweek10Active = document.querySelector('.pythonweek10Pills');
var pythonweek11Active = document.querySelector('.pythonweek11Pills');
var pythonweek12Active = document.querySelector('.pythonweek12Pills');

$(document).ready(function(){
    pythonweek1Active.classList.add('active');
})


// =============python week content===========
var pythonWeek1ContentPills = document.querySelector('.pythonWeek1Content');
var pythonWeek2ContentPills = document.querySelector('.pythonWeek2Content');
var pythonWeek3ContentPills = document.querySelector('.pythonWeek3Content');
var pythonWeek4ContentPills = document.querySelector('.pythonWeek4Content');
var pythonWeek5ContentPills = document.querySelector('.pythonWeek5Content');
var pythonWeek6ContentPills = document.querySelector('.pythonWeek6Content');
var pythonWeek7ContentPills = document.querySelector('.pythonWeek7Content');
var pythonWeek8ContentPills = document.querySelector('.pythonWeek8Content');
var pythonWeek9ContentPills = document.querySelector('.pythonWeek9Content');
var pythonWeek10ContentPills = document.querySelector('.pythonWeek10Content');
var pythonWeek11ContentPills = document.querySelector('.pythonWeek11Content');
var pythonWeek12ContentPills = document.querySelector('.pythonWeek12Content');


pythonWeek1.onclick = () => {
    // alert("pythonWeek1Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek1Active.classList.add('active');

    // ----remove active-----
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active');
    pythonweek4Active.classList.remove('active');
    pythonweek5Active.classList.remove('active');
    pythonweek6Active.classList.remove('active');
    pythonweek7Active.classList.remove('active');
    pythonweek8Active.classList.remove('active');
    pythonweek9Active.classList.remove('active');
    pythonweek10Active.classList.remove('active');
    pythonweek11Active.classList.remove('active');
    pythonweek12Active.classList.remove('active');

    // ========add========
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');
    
    // =======remove======
    pythonWeek1ContentPills.classList.remove('hidden');
    
}

pythonWeek2.onclick = () => {
    // alert("pythonWeek 2 Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek2Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active');
    pythonweek3Active.classList.remove('active');
    pythonweek4Active.classList.remove('active');
    pythonweek5Active.classList.remove('active');
    pythonweek6Active.classList.remove('active');
    pythonweek7Active.classList.remove('active');
    pythonweek8Active.classList.remove('active');
    pythonweek9Active.classList.remove('active');
    pythonweek10Active.classList.remove('active');
    pythonweek11Active.classList.remove('active');
    pythonweek12Active.classList.remove('active');

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');
    // =======remove======
    pythonWeek2ContentPills.classList.remove('hidden');
}

pythonWeek3.onclick = () => {
    // alert("pythonWeek3Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek3Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek3ContentPills.classList.remove('hidden');

}

pythonWeek4.onclick = () => {
    // alert("pythonWeek4Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek4Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek4ContentPills.classList.remove('hidden');
}

pythonWeek5.onclick = () => {
    // alert("pythonWeek 5 Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek5Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek5ContentPills.classList.remove('hidden');

}

pythonWeek6.onclick = () => {
    // alert("pythonWeek 6 Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek6Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek6ContentPills.classList.remove('hidden');

}

pythonWeek7.onclick = () => {
    // alert("pythonWeek 7 Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek7Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');
    

    // =======remove======
    pythonWeek7ContentPills.classList.remove('hidden');

}

pythonWeek8.onclick = () => {
    // alert("pythonWeek 8 Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek8Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek8ContentPills.classList.remove('hidden');

}

pythonWeek9.onclick = () => {
    // alert("pythonWeek9Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek9Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek9ContentPills.classList.remove('hidden');
}

pythonWeek10.onclick = () => {
    // alert("pythonWeek10Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek10Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek10ContentPills.classList.remove('hidden');
}

pythonWeek11.onclick = () => {
    // alert("pythonWeek11Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek11Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek12Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek12ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek11ContentPills.classList.remove('hidden');
}

pythonWeek12.onclick = () => {
    // alert("pythonWeek12Tab work");

    // =======active background tab=======
    // -----add active----
    pythonweek12Active.classList.add('active');

    // ----remove active-----
    pythonweek1Active.classList.remove('active')
    pythonweek2Active.classList.remove('active')
    pythonweek3Active.classList.remove('active')
    pythonweek4Active.classList.remove('active')
    pythonweek5Active.classList.remove('active')
    pythonweek6Active.classList.remove('active')
    pythonweek7Active.classList.remove('active')
    pythonweek8Active.classList.remove('active')
    pythonweek9Active.classList.remove('active')
    pythonweek10Active.classList.remove('active')
    pythonweek11Active.classList.remove('active')

    // ========add========
    pythonWeek1ContentPills.classList.add('hidden');
    pythonWeek2ContentPills.classList.add('hidden');
    pythonWeek3ContentPills.classList.add('hidden');
    pythonWeek4ContentPills.classList.add('hidden');
    pythonWeek5ContentPills.classList.add('hidden');
    pythonWeek6ContentPills.classList.add('hidden');
    pythonWeek7ContentPills.classList.add('hidden');
    pythonWeek8ContentPills.classList.add('hidden');
    pythonWeek9ContentPills.classList.add('hidden');
    pythonWeek10ContentPills.classList.add('hidden');
    pythonWeek11ContentPills.classList.add('hidden');

    // =======remove======
    pythonWeek12ContentPills.classList.remove('hidden');
}




// =====================java programming====================
// ========buttons=======
var javaWeek1 = document.getElementById('javaWeek1');
var javaWeek2 = document.getElementById('javaWeek2');
var javaWeek3 = document.getElementById('javaWeek3');
var javaWeek4 = document.getElementById('javaWeek4');
var javaWeek5 = document.getElementById('javaWeek5');
var javaWeek6 = document.getElementById('javaWeek6');
var javaWeek7 = document.getElementById('javaWeek7');
var javaWeek8 = document.getElementById('javaWeek8');

// =======activeBtn=========
var javaweek1Active = document.querySelector('.javaweek1Pills');
var javaweek2Active = document.querySelector('.javaweek2Pills');
var javaweek3Active = document.querySelector('.javaweek3Pills');
var javaweek4Active = document.querySelector('.javaweek4Pills');
var javaweek5Active = document.querySelector('.javaweek5Pills');
var javaweek6Active = document.querySelector('.javaweek6Pills');
var javaweek7Active = document.querySelector('.javaweek7Pills');
var javaweek8Active = document.querySelector('.javaweek8Pills');

// ========java week content========
var javaWeek1ContentPills = document.querySelector('.javaWeek1Content');
var javaWeek2ContentPills = document.querySelector('.javaWeek2Content');
var javaWeek3ContentPills = document.querySelector('.javaWeek3Content');
var javaWeek4ContentPills = document.querySelector('.javaWeek4Content');
var javaWeek5ContentPills = document.querySelector('.javaWeek5Content');
var javaWeek6ContentPills = document.querySelector('.javaWeek6Content');
var javaWeek7ContentPills = document.querySelector('.javaWeek7Content');
var javaWeek8ContentPills = document.querySelector('.javaWeek8Content');

$(document).ready(function(){
    javaweek1Active.classList.add('active');
})

// =========java week content========

// =======functions=========
javaWeek1.onclick = () => {
    // alert("java week1 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek1Active.classList.add('active');

    // -----remove active class------
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek1ContentPills.classList.remove('hidden');
    

}

javaWeek2.onclick = () => {
    // alert("java week 2 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek2Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek2ContentPills.classList.remove('hidden');

}

javaWeek3.onclick = () => {
    // alert("java week 3 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek3Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek3ContentPills.classList.remove('hidden');

}

javaWeek4.onclick = () => {
    // alert("java week 4 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek4Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek4ContentPills.classList.remove('hidden');

}

javaWeek5.onclick = () => {
    // alert("java week 5 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek5Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek5ContentPills.classList.remove('hidden');

}

javaWeek6.onclick = () => {
    // alert("java week 6 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek6Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek7Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek6ContentPills.classList.remove('hidden');

}

javaWeek7.onclick = () => {
    // alert("java week 7 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek7Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek8Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek4ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek8ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek7ContentPills.classList.remove('hidden');

}

javaWeek8.onclick = () => {
    // alert("java week 8 work");

    // =====active background color pills======

    // -----add active clas------
    javaweek8Active.classList.add('active');

    // -----remove active class------
    javaweek1Active.classList.remove('active');
    javaweek2Active.classList.remove('active');
    javaweek3Active.classList.remove('active');
    javaweek4Active.classList.remove('active');
    javaweek5Active.classList.remove('active');
    javaweek6Active.classList.remove('active');
    javaweek7Active.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    javaWeek1ContentPills.classList.add('hidden');
    javaWeek2ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek3ContentPills.classList.add('hidden');
    javaWeek5ContentPills.classList.add('hidden');
    javaWeek6ContentPills.classList.add('hidden');
    javaWeek7ContentPills.classList.add('hidden');
    
    // =======remove======
    javaWeek8ContentPills.classList.remove('hidden');


}



// ================web design===============

// =====buttons=====
var webHtmlBtn = document.getElementById('webHtml'); 
var WebCssBtn = document.getElementById('WebCss'); 
var webjavaScriptBtn = document.getElementById('webjavaScript'); 

// =======activeBtn=========
var webHtmlActive = document.querySelector('.webHtmlPills');
var webCssActive = document.querySelector('.webCssPills');
var javaScriptActive = document.querySelector('.webjavaScriptPills');

// ========java week content========
var webHtmlContentPills = document.querySelector('.webHtmlContent');
var webCssContentPills = document.querySelector('.webCssContent');
var webJavaScriptContentPills = document.querySelector('.webJavaScriptContent');


$(document).ready(function(){
    webHtmlActive.classList.add('active');
})


// ======functions=======
webHtmlBtn.onclick = () => {
    // alert("webHtmlBtn work");

    // =====active background color pills======

    // -----add active clas------
    webHtmlActive.classList.add('active');

    // -----remove active class------
    webCssActive.classList.remove('active');
    javaScriptActive.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    webCssContentPills.classList.add('hidden');
    webJavaScriptContentPills.classList.add('hidden');
    
    // =======remove======
    webHtmlContentPills.classList.remove('hidden');

}

WebCssBtn.onclick = () => {
    // alert("WebCssBtn work");

    // =====active background color pills======

    // -----add active clas------
    webCssActive.classList.add('active');

    // -----remove active class------
    webHtmlActive.classList.remove('active');
    javaScriptActive.classList.remove('active');

    // ========show java content pills======
 
    // ========add========
    webHtmlContentPills.classList.add('hidden');
    webJavaScriptContentPills.classList.add('hidden');
    
    // =======remove======
    webCssContentPills.classList.remove('hidden');

}

webjavaScriptBtn.onclick = () => {
    // alert("webjavaScriptBtn work");

    // =====active background color pills======

    // -----add active clas------
    javaScriptActive.classList.add('active');

    // -----remove active class------
    webCssActive.classList.remove('active');
    webHtmlActive.classList.remove('active');

     // ========show java content pills======
 
    // ========add========
    webHtmlContentPills.classList.add('hidden');
    webCssContentPills.classList.add('hidden');
    
    // =======remove======
    webJavaScriptContentPills.classList.remove('hidden');
}
