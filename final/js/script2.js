$(document).ready(function () {

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

  // Reference chatroom document
  const docRef = firebase.firestore()
    .collection("chatrooms")
    .doc("chatroom1");
  // Reference chatroom messages
  const messagesRef = docRef.collection("messages");

  // Referenct authentifacation
  const auth = firebase.auth();

  // Reference chatroom messages query
  const queryRef = messagesRef
    .orderBy("timeStamp", "asc");

  // Store Profile Info
  let profile_Name, 
      profile_photoURL;

  // REGISTER DOM ELEMENTS
  const $email = $('#email');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $btnSignOut = $('#btnSignOut');
  const $signInfo = $('#sign-info');
  const $cardHeader = $('#card-header');
  const $messageField = $('#message-field');
  const $messageList = $('#message-list');
  const $userName = $('#user-name');
  const $userPhoto = $('#user-photo');
  $signInfo.html("");

  // SignIn
  $btnSignIn.click(function (e) {
    $btnSignIn.html(`<span class="spinner-border spinner-border-sm"></span>`);
    auth.signInWithEmailAndPassword($email.val(), $password.val())
      .then(function (e) {
        $btnSignIn.html(`Sign In`);
        window.location.href = "./book.html";
      })
      .catch(function (e) {
        $btnSignIn.html(`Sign In`);
        console.log(e.message);
        $signInfo.html(e.message);
      });
  });

  // SignUp
  $btnSignUp.click(function (e) {
    console.log('sign up now ...');
    $btnSignUp.html(`<span class="spinner-border spinner-border-sm"></span>`);
    auth.createUserWithEmailAndPassword($email.val(), $password.val())
      .then(function () {
        const user = auth.currentUser;
        profile_Name = $('#userName').val();
        profile_photoURL = $('#photoURL').val();
        console.log(user);

        user.updateProfile({
          displayName: profile_Name,
          photoURL: profile_photoURL
        })
          .then(function () {
            $btnSignUp.html(`Sign Up`);
            $email.val('');
            $password.val('');
            $('#userName').val('');
            $('#photoURL').val('');
            console.log("Update successful.");
            window.location.href = "./book.html";
          });
      })
      .catch(function (e) {
        console.log(e.message);
        $signInfo.html(e.message);
      });
  });

  // Listening Login User
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
      $signInfo.html(`${user.email} is login...`);
      user.providerData.forEach(function (profile) {
        profile_Name = profile.displayName;
        $userName.html(profile.displayName);
        // $userPhoto.attr("src", profile.photoURL);
      });
      
    } else {
      console.log("not logged in");
    }
  });


  // Signout
  $btnSignOut.click(function () {
    auth.signOut();
    $email.val('');
    $password.val('');
    $signInfo.html('No one login...');
    window.location.href = "./home.html";
  });


  let docRef2 = firebase.firestore()
      .collection("booking")
      .doc("book");

  let bookRef = docRef2.collection("books");
  // REGISTER DOM ELEMENTS
  const $date1 = $('#datepicker');
  const $date2 = $('#datepicker2');
  const $room_value = $('#inputGroupSelect01');
  const $send = $('#send');


  $send.click(function(){

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
    
    bookRef.add({
      "user_name":document.getElementById("user-name").innerHTML,
      "date_in": $date1.val(),
      "date_out": $date2.val(),
      "room": $room,
    });
    alert("into database");
    auth.signOut();
    window.location.href = "./home.html";
  });

});
