// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-vsZZqzLPzEQUycOsUuc0qPl2RzWkTyw",
    authDomain: "app-media-pembelajaran-ipa.firebaseapp.com",
    databaseURL: "https://app-media-pembelajaran-ipa-default-rtdb.firebaseio.com",
    projectId: "app-media-pembelajaran-ipa",
    storageBucket: "app-media-pembelajaran-ipa.appspot.com",
    messagingSenderId: "651373952967",
    appId: "1:651373952967:web:29bb69c9c6bdc4d66963e2",
    measurementId: "G-1N9M8MH13N"
  };


  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
 
let kmplanId = [];

let kuisnya = document.getElementById('kuis');

let tmb = document.querySelector('.disana');
tmb.innerHTML = "";
let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
// let sekolahfix = '';
let tempat_kunci1= document.getElementById('kuncinya1');
let tempat_kunci2= document.getElementById('kuncinya2');

let cek11 = 0;
kuisfix = kuisnya.value;

function readlah() {
    kuisfix = kuisnya.value;
    console.log(kuisfix);
    var task = firebase.database().ref(kuisfix);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "VII A";
    } else if (kelasnya.value == "2") {
        kelasfix = "VII B";
    } else if (kelasnya.value == "3") {
        kelasfix = "VII C";
    }

    let jwbfixx = [];

    let jwb1 = ["a", "d", "a", "a", "b", "e", "c", "d", "c", "a"]; // ini ganti lwn kunci jawaban km
    if (kuisfix == "latihan1/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb1.length; i++) {
            hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
        }
        hhh += `</tr>`;
        tempat_kunci1.innerHTML = hhh;
        jwbfixx = jwb1;
    }

    let jwb2 = ["c", "b", "a", "c", "a", "a", "c", "a", "a", "b"]; // ini ganti lwn kunci jawaban km
    if (kuisfix == "latihan2/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb2.length; i++) {
            hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
        }
        hhh += `</tr>`;
        tempat_kunci1.innerHTML = hhh;
        jwbfixx = jwb2;
    }

    let jwb3 = ["b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]; // ini ganti lwn kunci jawaban km
    if (kuisfix == "latihan3/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb3.length; i++) {
            hhh += `<td class="table-info"> ${jwb3[i]}</td>`;
        }
        hhh += `</tr>`;
        tempat_kunci1.innerHTML = hhh;
        jwbfixx = jwb3;
    }

    let jwb4 = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]; // ini ganti lwn kunci jawaban km
    if (kuisfix == "latihan4/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb4.length; i++) {
            hhh += `<td class="table-info"> ${jwb4[i]}</td>`;
        }
        hhh += `</tr>`;
        tempat_kunci1.innerHTML = hhh;
        jwbfixx = jwb4;
    }
 
    let evaluasi = ["a", "a", "d", "b", "c", "b", "d", "a", "e", "b", "e", "e", "a", "b", "d", "d", "b", "e", "c", "b"]; // ini ganti lwn kunci jawaban km
    if (kuisfix == "evaluasi/") {
        let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < evaluasi.length; i++) {
            hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
        }
        hhh += `</tr>`;
        tempat_kunci2.innerHTML += hhh;
        jwbfixx = evaluasi;
    }

    if (kelasfix != '') {
        task.orderByChild("nama").on("child_added", function (data) {
            
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            if (kelasfix == taskvalue.kelas) {
                
                let mm= '';
                mm += `</tr>`;
                mm += `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                for (let i = 0; i < taskvalue.jawabannya.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                // console.log(mm);

                if (kuisfix == "latihan1/"){
                    tmp.innerHTML += mm;
                } else if (kuisfix == "latihan2/"){
                    tmp.innerHTML += mm;
                } else if (kuisfix == "latihan3/"){
                    tmp.innerHTML += mm;
                } else if (kuisfix == "latihan4/"){
                    tmp.innerHTML += mm;
                } else if (kuisfix == "evaluasi/"){
                    tmb.innerHTML += mm;
                }
            }

        });

    } else {
        alert('Tentukan filter pencarian');
    }

}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "Latihan 1/";
}

// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    kuisfix = kuisnya.value;
    var data_type = 'data:application/vnd.ms-excel';
    let downloaddata;
    if (kuisfix == "Evaluasi/"){
        downloaddata = "table_wrapper";
    } 
    var table_div = document.getElementById(downloaddata);
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
    a.click();
})

var myVar = setInterval(hasil, 1000);

function hasil() {
    var disanaa = document.getElementById('disana');
    var disinii = document.getElementById('disini');
    kuisfix = kuisnya.value;

    if (kuisfix == "latihan1/"){
        disinii.hidden = false;
        disanaa.hidden = true;
    } else if (kuisfix == "latihan2/"){
        disinii.hidden = false;
        disanaa.hidden = true;
    } else if (kuisfix == "latihan3/"){
        disinii.hidden = false;
        disanaa.hidden = true;
    } else if (kuisfix == "latihan4/"){
        disinii.hidden = false;
        disanaa.hidden = true;
    } else if (kuisfix == "evaluasi/"){
        disinii.hidden = true;
        disanaa.hidden = false;
    }
}
