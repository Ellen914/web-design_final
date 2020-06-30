$(document).ready(function(){

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyAWxGMF7oqxA-Oaj92DRT2k38SgaUqgxPk",
    authDomain: "project-4050253863273551435.firebaseapp.com",
    databaseURL: "https://project-4050253863273551435.firebaseio.com",
    projectId: "project-4050253863273551435",
    storageBucket: "project-4050253863273551435.appspot.com",
    messagingSenderId: "577033453867",
    appId: "1:577033453867:web:9f79f2d7eee3e08633c56e",
    measurementId: "G-0FPDPGF323"
  });
  // Reference Firebase Auth
  const auth = firebase.auth();
  let docRef = firebase.firestore()
      .collection("booking")
      .doc("book");

  let bookRef = docRef.collection("books");
  // REGISTER DOM ELEMENTS
  const $date1 = $('#datepicker');
  const $date2 = $('#datepicker2');
  const $room_value = $('#inputGroupSelect01');
  const $test = $('#test');
  // const $userName = $('#user-name');

  $test.click(function(){
    alert($date1.val());
    alert($date2.val());
    
    if($room_value.val()==1){
      $room = "豪華客房";
    }
    else if ($room_value.val()==2){
      $room = "菁英客房";
    }
    else if ($room_value.val()==3){
      $room = "薈萃客房";
    }
    else if ($room_value.val()==4){
      $room = "當代三人房";
    }
    else if ($room_value.val()==5){
      $room = "經典家庭房";
    }
    else if ($room_value.val()==6){
      $room = "卓越套房";
    }
    else if ($room_value.val()==7){
      $room = "行政套房";
    }
    else if ($room_value.val()==8){
      $room = "寰宇套房";
    }
    alert($room);
    bookRef.add({
      "date_in": $date1.val(),
      "date_out": $date2.val(),
      "room": $room,
    });
  });
});


