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

  
    // Reference book document
    let docRef = firebase.firestore()
      .collection("booking")
      .doc("book");

    // Reference books
    let bookRef = docRef.collection("books");

    // Reference chatroom messages query
    let queryRef = bookRef
        .orderBy("timeStamp", "asc");

    


    // REGISTER DOM ELEMENTS
    const $datepicker = $('#datepicker');
    const $datepicker2 = $('#datepicker2');
    const $inputGroupSelect01 = $('#inputGroupSelect01');
    const $btnSendout = $('#btnSendout');

    $btnSendout.click(function(e) {
        // alert("視窗內之文字")
        $btnSendout.html(`<span class="spinner-border spinner-border-sm"></span>`);
        
        //FIELD VALUES
        let datain = $date1.val();
        let dataout = $date2.val();
        // let inputGroupSelect01 = $inputGroupSelect01.val();
        alert(datain)
        

        // alert(selectedValue)

        //SAVE DATA TO FIREBASE
        bookRef.add({
            "datepicker": firstdata,
            "datepicker2": datepicker2,
            "room": inputGroupSelect01,
            "timeStamp": Date.now()
        });

        // EMPTY INPUT FIELD 清空
        $datepicker.val('');
        $datepicker2.val('');

    });





});