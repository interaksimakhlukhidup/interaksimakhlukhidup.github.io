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
	if(nilai==1){
		document.getElementById("ket").innerHTML= "Jawaban Benar";
		document.getElementById("ket").style.color="green";
		document.getElementById("jwb1").hidden = false;
		document.getElementById("2").disabled = true;
		document.getElementById("3").disabled = true;
		document.getElementById("4").disabled = true;
		jumlah_benar=jumlah_benar+1;
	}
		else{
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

		}
		else{
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
	if(nilai==3){
		document.getElementById("ket3").innerHTML= "Jawaban Benar";
		document.getElementById("ket3").style.color="green";
		document.getElementById("jwb3").hidden = false;
		document.getElementById("9").disabled = true;
		document.getElementById("10").disabled = true;
		document.getElementById("12").disabled = true;
		jumlah_benar=jumlah_benar+1;
		}
		else{
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
		if(jumlah_benar>=3){
			sessionStorage.setItem("tombol_lanjut_biotik", '1');
			localStorage.setItem("tombol_lanjut_biotik", '1');
			alert('Silahkan klik selanjutnya untuk melanjutkan materi...');
			document.getElementById("selanjutnya").style="float:right;padding:4px 8px 4px 8px; color:white; background-color:blue; width:140px; border-radius: 7px 7px 7px 7px;";
		}
	}
	
}

