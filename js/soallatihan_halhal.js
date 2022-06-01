var jumlah_benar = 0;
function nomor1(){
	if(form.no1.value === ""){
		document.getElementById("jwb1").hidden = true;
		document.getElementById("ket").innerHTML="Jawaban Salah";
		document.getElementById("jwb1").hidden = false;
		console.log(form.no1.value);
	}
	else{ 
	nilai =eval(form.no1.value);
	console.log(nilai);
	if(nilai==4){
		document.getElementById("ket").innerHTML= "Jawaban Benar";
		document.getElementById("ket").style.color="green";
		document.getElementById("jwb1").hidden = false;
		document.getElementById("1").disabled = true;
		document.getElementById("2").disabled = true;
		document.getElementById("3").disabled = true;
		jumlah_benar=jumlah_benar+1;
		form.no1[3].parentElement.style.backgroundColor ='green';
		form.no1[0].parentElement.style.backgroundColor ='white';
		form.no1[2].parentElement.style.backgroundColor ='white';
		form.no1[1].parentElement.style.backgroundColor ='white';
		
		}
		else if(nilai == 1){
			form.no1[0].parentElement.style.backgroundColor ='red';
			form.no1[1].parentElement.style.backgroundColor ='white';
			form.no1[2].parentElement.style.backgroundColor ='white';
			form.no1[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket").innerHTML ="Jawaban Salah";
			document.getElementById("ket").style.color="red";
			document.getElementById("jwb1").hidden = false;
		}
		else if(nilai == 3){
			form.no1[2].parentElement.style.backgroundColor ='red';
			form.no1[0].parentElement.style.backgroundColor ='white';
			form.no1[1].parentElement.style.backgroundColor ='white';
			form.no1[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket").innerHTML ="Jawaban Salah";
			document.getElementById("ket").style.color="red";
			document.getElementById("jwb1").hidden = false;
		}
		else{
			form.no1[1].parentElement.style.backgroundColor ='red';
			form.no1[0].parentElement.style.backgroundColor ='white';
			form.no1[3].parentElement.style.backgroundColor ='white';
			form.no1[2].parentElement.style.backgroundColor ='white';
			document.getElementById("ket").innerHTML ="Jawaban Salah";
			document.getElementById("ket").style.color="red";
			document.getElementById("jwb1").hidden = false;
		}
	}
}

function nomor2(){
	if(form.no2.value === ""){
		document.getElementById("jwb2").hidden = true;
		document.getElementById("ket2").innerHTML="Jawaban Salah";
		document.getElementById("jwb2").hidden = false;
		console.log(form.no2.value);
	}
	else{
	nilai =eval(form.no2.value);
	console.log(nilai);
	if(nilai==4){
		document.getElementById("ket2").innerHTML= "Jawaban Benar";
		document.getElementById("ket2").style.color="green";
		document.getElementById("jwb2").hidden = false;
		document.getElementById("5").disabled = true;
		document.getElementById("7").disabled = true;
		document.getElementById("6").disabled = true;
		jumlah_benar=jumlah_benar+1;
		form.no2[3].parentElement.style.backgroundColor ='green';
		form.no2[1].parentElement.style.backgroundColor ='white';
		form.no2[2].parentElement.style.backgroundColor ='white';
		form.no2[0].parentElement.style.backgroundColor ='white';
		
		}
		else if(nilai == 2){
			form.no2[1].parentElement.style.backgroundColor ='red';
			form.no2[0].parentElement.style.backgroundColor ='white';
			form.no2[2].parentElement.style.backgroundColor ='white';
			form.no2[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket2").innerHTML ="Jawaban Salah";
			document.getElementById("ket2").style.color="red";
			document.getElementById("jwb2").hidden = false;
		}
		else if(nilai == 3){
			form.no2[2].parentElement.style.backgroundColor ='red';
			form.no2[0].parentElement.style.backgroundColor ='white';
			form.no2[1].parentElement.style.backgroundColor ='white';
			form.no2[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket2").innerHTML ="Jawaban Salah";
			document.getElementById("ket2").style.color="red";
			document.getElementById("jwb2").hidden = false;
		}
		else{
			form.no2[0].parentElement.style.backgroundColor ='red';
			form.no2[3].parentElement.style.backgroundColor ='white';
			form.no2[1].parentElement.style.backgroundColor ='white';
			form.no2[2].parentElement.style.backgroundColor ='white';
			document.getElementById("ket2").innerHTML ="Jawaban Salah";
			document.getElementById("ket2").style.color="red";
			document.getElementById("jwb2").hidden = false;
		}
	}
}

function nomor3(){
	if(form.no3.value === ""){
		document.getElementById("jwb3").hidden = true;
		document.getElementById("ket3").innerHTML="Jawaban Salah";
		document.getElementById("jwb3").hidden = false;
		console.log(form.no3.value);
	}
	else{
	nilai =eval(form.no3.value);
	console.log(nilai);
	if(nilai==2){
		document.getElementById("ket3").innerHTML= "Jawaban Benar";
		document.getElementById("ket3").style.color="green";
		document.getElementById("jwb3").hidden = false;
		document.getElementById("9").disabled = true;
		document.getElementById("11").disabled = true;
		document.getElementById("12").disabled = true;
		jumlah_benar=jumlah_benar+1;
		form.no3[1].parentElement.style.backgroundColor ='green';
		form.no3[2].parentElement.style.backgroundColor ='white';
		form.no3[0].parentElement.style.backgroundColor ='white';
		form.no3[3].parentElement.style.backgroundColor ='white';
		
		}
		else if(nilai == 3){
			form.no3[2].parentElement.style.backgroundColor ='red';
			form.no3[0].parentElement.style.backgroundColor ='white';
			form.no3[1].parentElement.style.backgroundColor ='white';
			form.no3[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket3").innerHTML ="Jawaban Salah";
			document.getElementById("ket3").style.color="red";
			document.getElementById("jwb3").hidden = false;
		}
		else if(nilai == 1){
			form.no3[0].parentElement.style.backgroundColor ='red';
			form.no3[1].parentElement.style.backgroundColor ='white';
			form.no3[2].parentElement.style.backgroundColor ='white';
			form.no3[3].parentElement.style.backgroundColor ='white';
			document.getElementById("ket3").innerHTML ="Jawaban Salah";
			document.getElementById("ket3").style.color="red";
			document.getElementById("jwb3").hidden = false;
		}
		else{
			form.no3[3].parentElement.style.backgroundColor ='red';
			form.no3[0].parentElement.style.backgroundColor ='white';
			form.no3[1].parentElement.style.backgroundColor ='white';
			form.no3[2].parentElement.style.backgroundColor ='white';
			document.getElementById("ket3").innerHTML ="Jawaban Salah";
			document.getElementById("ket3").style.color="red";
			document.getElementById("jwb3").hidden = false;
		}
	}
}

function cek(){
	if( form.no1.value === ""|| form.no2.value === ""  || form.no3.value === "" ){
		alert("JAWABAN MASIH KOSONG!")
	}
	else{
		nomor1();
		nomor2();
		nomor3();


		let nav_bawah4 = document.getElementById('nav_bawah4');
		if(jumlah_benar>=3){
			sessionStorage.setItem("tombol_lanjut_halhal", '1');
			localStorage.setItem("tombol_lanjut_halhal", '1')
			alert('Silahkan klik selanjutnya untuk melanjutkan materi...');
			nav_bawah4.style.display = 'block';
		}
	}
	
}