$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }

      // scroll spy 

      
    $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

    });

    // smooth scrolling

    $('a[href*="#"]').on('click',function(e){

      e.preventDefault();

      $('html, body').animate({

        scrollTop : $($(this).attr('href')).offset().top,

      },
      500,
      'linear'
      )

    })

});

// contact form

var firebaseConfig = {
  apiKey: "AIzaSyBw3YPapsTvYq23q9gcpjthKz3437L_6rc",
  authDomain: "contactform-4bf76.firebaseapp.com",
  databaseURL: "https://contactform-4bf76-default-rtdb.firebaseio.com",
  projectId: "contactform-4bf76",
  storageBucket: "contactform-4bf76.appspot.com",
  messagingSenderId: "563166389695",
  appId: "1:563166389695:web:d7374bf9222d616ee1ed0a",
  measurementId: "G-BKJBWJ1TFH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("fomData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
//Prevent Default Form Submission Behavior
e.preventDefault()

//Get Form Values
let name = document.getElementById('name').value
let email = document.getElementById('email').value
let subject = document.getElementById('subject').value

//Save Form Data To Firebase
db.doc().set({
  fname: name,
  email: email,
  subject:subject
}).then( () => {
  console.log("Data saved")
}).catch((error) => {
  console.log(error)
})

//alert
alert("Your Form Has Been Submitted Successfully")
})