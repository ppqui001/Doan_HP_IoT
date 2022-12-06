// Them thu vien
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// Cau hinh firebase
const firebaseConfig = {
    apiKey: "AIzaSyA18yH_4l7o0rEiNJe1Ybk0wlG9A1H15fU",
    authDomain: "doaniot-39e9c.firebaseapp.com",
    databaseURL: "https://doaniot-39e9c-default-rtdb.firebaseio.com",
    projectId: "doaniot-39e9c",
    storageBucket: "doaniot-39e9c.appspot.com",
    messagingSenderId: "977342964680",
    appId: "1:977342964680:web:518da215ac262fa7b896fd"
};

var ph_Value, temp_Value, WL_Value, timeUpdate;

// Khai bao bien  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const db = getDatabase();

send.addEventListener('click', (e) => {
    Sends('Number');
});
read.addEventListener('click', (e) => {
    Getval('Number');
});

function Sends(S) {
    Number = parseFloat(document.getElementById('Number').value);
    const db = getDatabase();
    set(ref(db, S), {
        Value: Number
    });
}

function Getval(D) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, D + '/Value')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
            document.getElementById('val').innerHTML = "Number = " + snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}

// // Doc pH
// const ref_pH = ref(db, 'Value' + '/pH_Val');
// onValue(ref_pH, (snapshot) => {
//     ph_Value = snapshot.val();
//     document.getElementById('pH_Val').innerHTML = "pH: " + ph_Value;
// });

// // Doc nhiet do
// const ref_Temp = ref(db, 'Value' + '/temp_Val');
// onValue(ref_Temp, (snapshot) => {
//     temp_Value = snapshot.val();
//     document.getElementById('temp_Val').innerHTML = "Nhiệt độ: " + temp_Value + " &deg;C";
// });

// // Doc muc nuoc
// const ref_WL = ref(db, 'Value' + '/WL_Val');
// onValue(ref_WL, (snapshot) => {
//     WL_Value = snapshot.val();
//     document.getElementById('WL_Val').innerHTML = "Mức nước: " + WL_Value + " cm";
// });

// // Thoi gian cap nhat
// const ref_Time = ref(db, 'timeUpdate');
// onValue(ref_Time, (snapshot) => {
//     timeUpdate = snapshot.val();
//     document.getElementById('time_update').innerHTML = "Thời gian cập nhật: " + timeUpdate;
// });