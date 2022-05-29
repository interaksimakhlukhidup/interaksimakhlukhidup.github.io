let nav_bawah1 = document.getElementById('nav_bawah1');
let nav_bawah2 = document.getElementById('nav_bawah2');
let nav_bawah3 = document.getElementById('nav_bawah3');
let nav_bawah4 = document.getElementById('nav_bawah4');
let nav_bawah5 = document.getElementById('nav_bawah5');
let nav_bawah6 = document.getElementById('nav_bawah6');
let nav_bawah7 = document.getElementById('nav_bawah7');
let nav_bawah8 = document.getElementById('nav_bawah8');

let m12 = document.getElementById('m12');
let m13 = document.getElementById('m13');
let m14 = document.getElementById('m14');
let m2 = document.getElementById('m2');
let m21 = document.getElementById('m21');
let m22 = document.getElementById('m22');
let m3 = document.getElementById('m3');
let m31 = document.getElementById('m31');
let m32 = document.getElementById('m32');
let m33 = document.getElementById('m33');
let m4 = document.getElementById('m4');
let m41 = document.getElementById('m41');
let m42 = document.getElementById('m42');
let m43 = document.getElementById('m43');
let m5 = document.getElementById('m5');
let m51 = document.getElementById('m51');


let cek_11 = localStorage.getItem('tombol_lanjut_pengertianlingjungan');
let cek_12 = localStorage.getItem('tombol_lanjut_biotik');
let cek_13 = localStorage.getItem('tombol_lanjut_abiotik');
let cek_14 = localStorage.getItem('latihan1');
let cek_21 = localStorage.getItem('tombol_lanjut_halhal');
let cek_22 = localStorage.getItem('latihan2');
let cek_31 = localStorage.getItem('tombol_lanjut_polaekosistem');
let cek_32 = localStorage.getItem('tombol_lanjut_macamekosistem');
let cek_33 = localStorage.getItem('latihan3');
let cek_41 = localStorage.getItem('tombol_lanjut_pengertianpencemaran');
let cek_42 = localStorage.getItem('tombol_lanjut_jenispencemaran');
let cek_43 = localStorage.getItem('latihan4');


if(cek_11 == 1){
	m12.style.color ='black';
	m12.href = 'biotik.html';
	nav_bawah1.style.display = 'block';
}

if(cek_12 == 1){
	m13.style.color ='black';
	m13.href = 'abiotik.html';
	nav_bawah2.style.display = 'block';
}

if(cek_13 == 1){
	m14.style.color = 'black';
	m14.href = 'latihan1/kuiss1.html';
	nav_bawah3.style.display = 'block';
}

if(cek_14 == 1){
	m21.style.color ='black';
	m21.href = 'halhal.html';
	m2.style.color ='white';
	

}

if(cek_21 == 1){
	m22.style.color='black';
	m22.href ='latihan2/kuiss1.html';
	nav_bawah4.style.display = 'block';
}



if(cek_22 == 1){
	m31.style.color='black';
	m31.href = 'polaekosistem.html';
	m3.style.color ='white';
}


if(cek_31 == 1){
	m32.style.color='black'
	m32.href = 'macamekosistem.html';
	nav_bawah5.style.display = 'block';
}

if(cek_32 == 1){
	m33.style.color ='black';
	m33.href = 'latihan3/kuiss1.html';
}

if (cek_33 == 1){
	m41.style.color = 'black';
	m41.href = 'pengertianpencemaran.html';
	m4.style.color = 'white';
	nav_bawah6.style.display = 'block';
}


if(cek_41 == 1){
	m42.style.color ='black';
	m42.href = 'jenispencemaran.html';
	nav_bawah7.style.display = 'block';
}


if(cek_42 == 1){
	m43.style.color ='black';
	m43.href = 'latihan4/kuiss1.html';
	nav_bawah8.style.display = 'block';
}

if(cek_43 == 1){
	m51.style.color = 'black';
	m51.href = 'kuis/kuiss1.html';
	m5.style.color = 'white';
}


