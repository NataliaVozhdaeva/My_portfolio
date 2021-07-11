window.onload = function(){
	var item = document.getElementsByClassName("cat");
	var choice = document.createElement("div");
	var numOfClicks = 0;
	var slider = document.querySelector(".slider");
	
	for(let i=0; i<item.length; i++){
		item[i].onclick = function(){
			numOfClicks++;
			if(numOfClicks % 2 !== 0){ 
				document.querySelector("#cont").append(choice);	
				choice.classList.add("onclick");
				choice.innerHTML = item[i].innerHTML;
			}else{
				choice.classList.remove("onclick");
				choice.innerHTML = null;
			}
			slider.onclick = function(){
				choice.classList.remove("onclick");
				choice.innerHTML = null;
			}
		}//item on click
	}//item 
	
	
	var QL = document.querySelector(".left");
	var QR = document.querySelector(".right");
		
	var FL1 = "url(pic/test/fall/7.jpg) no-repeat";
	var FL2 = "url(pic/test/fall/5.jpg) no-repeat";
	var FL3 = "url(pic/test/fall/9.jpg) no-repeat";
	
	var FR1 = "url(pic/test/winter/1.jpg) no-repeat";
	var FR2 = "url(pic/test/winter/2.jpg) no-repeat";
	var FR3 = "url(pic/test/winter/12.jpg) no-repeat";
	
	var firstImgL = [FL1, FL2, FL3];
	var firstImgR = [FR1, FR2, FR3];
	
	QL.style.background = firstImgL[Math.round(Math.random()*2)]; 
	QL.style.backgroundSize = "contain";
	QL.innerHTML = "На теплое время года"
	
	QR.style.background = firstImgR[Math.round(Math.random()*2)]; 
	QR.style.backgroundSize = "contain";
	QR.innerHTML = "На холодное время года"
	
	QL.onclick = function(){
		let secImg = [];
		for (let i=1; i<=8; i++){
			secImg.push("url(pic/test/fall/" + i +".jpg");
			QL.style.background = secImg[Math.round(Math.random()*7)]; 
			QL.style.backgroundSize = "contain";
			QL.style.backgroundRepeat = "no-repeat";
			QL.innerHTML = "Ткань первая?";
		}
		
		secImg.splice(0,8);
		
		for (let i=9; i<=16; i++){		
			secImg.push("url(pic/test/fall/" + i +".jpg");		
			QR.style.background = secImg[Math.round(Math.random()*7)]; 
			QR.style.backgroundSize = "contain";
			QR.style.backgroundRepeat = "no-repeat";
			QR.innerHTML = "Ткань вторая?";
		}
		
		secImg.splice(0,8);
		
		QL.onclick = function(){
			let trdImg = [];
			for (let i=1; i<=4; i++){
				trdImg.push("url(pic/test/fall/" + i +".jpg");
				QL.style.background = trdImg[Math.round(Math.random()*3)]; 
				QL.style.backgroundSize = "contain";
				QL.style.backgroundRepeat = "no-repeat";
				QL.innerHTML = "Поярче?";
			}
			
			trdImg.splice(0,4);
		
			for (let i=5; i<=8; i++){	
				trdImg.push("url(pic/test/fall/" + i +".jpg");
				QR.style.background = trdImg[Math.round(Math.random()*3)]; 
				QR.style.backgroundSize = "contain";
				QR.style.backgroundRepeat = "no-repeat";
				QR.innerHTML = "Поспокойнее?";
			}
		
			trdImg.splice(0,4);
		
			QL.onclick = function(){
				let fthImg = [];
				for (let i=1; i<=2; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
					fthImg.splice(0,2);
					
					QL.style.pointerEvents='none';
					
				for (let i=3; i<=4; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");	
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.left
		
		
			QR.onclick = function(){
				let fthImg = [];
				for (let i=5; i<=6; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");	
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
				fthImg.splice(0,2);
				
				QL.style.pointerEvents='none';
				
				for (let i=7; i<=8; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или вот этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.right	
		
		}//secondQL.onclick.left
			
		QR.onclick = function(){
		let trdImg = [];
		for (let i=9; i<=12; i++){
			trdImg.push("url(pic/test/fall/" + i +".jpg");
		}
			QL.style.background = trdImg[Math.round(Math.random()*3)]; 
			QL.style.backgroundSize = "contain";
			QL.style.backgroundRepeat = "no-repeat";
			QL.innerHTML = "Поярче?";	
		trdImg.splice(0,4);
		
		for (let i=13; i<=16; i++){	
			trdImg.push("url(pic/test/fall/" + i +".jpg");
			}
			QR.style.background = trdImg[Math.round(Math.random()*3)]; 
			QR.style.backgroundSize = "contain";
			QR.style.backgroundRepeat = "no-repeat";
			QR.innerHTML = "Поспокойнее?";
		trdImg.splice(0,4);
		
			QL.onclick = function(){
				let fthImg = [];
				for (let i=9; i<=10; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
					fthImg.splice(0,2);
					
					QL.style.pointerEvents='none';
					
				for (let i=11; i<=12; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");	
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.left
		
			QR.onclick = function(){
				let fthImg = [];
				for (let i=13; i<=14; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");	
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
				fthImg.splice(0,2);
				
				QL.style.pointerEvents='none';
				
				for (let i=15; i<=16; i++){
					fthImg.push("url(pic/test/fall/" + i +".jpg");
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или вот этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.right	
		
		}//secondQL.onclick.right
		
	}//firstQL.onclick.left
	
	QR.onclick = function(){
		let secImg = [];
		for (let i=1; i<=8; i++){
			secImg.push("url(pic/test/winter/" + i +".jpg");
			QL.style.background = secImg[Math.round(Math.random()*7)]; 
			QL.style.backgroundSize = "contain";
			QL.style.backgroundRepeat = "no-repeat";
			QL.innerHTML = "Ткань первая?";
		}
		
		secImg.splice(0,8);
		
		for (let i=9; i<=16; i++){		
			secImg.push("url(pic/test/winter/" + i +".jpg");		
			QR.style.background = secImg[Math.round(Math.random()*7)]; 
			QR.style.backgroundSize = "contain";
			QR.style.backgroundRepeat = "no-repeat";
			QR.innerHTML = "Ткань вторая?";
		}
		
		secImg.splice(0,8);
		
		QL.onclick = function(){
			let trdImg = [];
			for (let i=1; i<=4; i++){
				trdImg.push("url(pic/test/winter/" + i +".jpg");
				QL.style.background = trdImg[Math.round(Math.random()*3)]; 
				QL.style.backgroundSize = "contain";
				QL.style.backgroundRepeat = "no-repeat";
				QL.innerHTML = "Поярче?";
			}
			
			trdImg.splice(0,4);
		
			for (let i=5; i<=8; i++){	
				trdImg.push("url(pic/test/winter/" + i +".jpg");
				QR.style.background = trdImg[Math.round(Math.random()*3)]; 
				QR.style.backgroundSize = "contain";
				QR.style.backgroundRepeat = "no-repeat";
				QR.innerHTML = "Поспокойнее?";
			}
		
			trdImg.splice(0,4);
		
			QL.onclick = function(){
				let fthImg = [];
				for (let i=1; i<=2; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
					fthImg.splice(0,2);
					
					QL.style.pointerEvents='none';
					
				for (let i=3; i<=4; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");	
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.left
		
			QR.onclick = function(){
				let fthImg = [];
				for (let i=5; i<=6; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");	
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
				fthImg.splice(0,2);
				
				QL.style.pointerEvents='none';
				
				for (let i=7; i<=8; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или вот этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.right	
		
		}//secondQL.onclick.left
			
		QR.onclick = function(){
		let trdImg = [];
		for (let i=9; i<=12; i++){
			trdImg.push("url(pic/test/winter/" + i +".jpg");
		}
			QL.style.background = trdImg[Math.round(Math.random()*3)]; 
			QL.style.backgroundSize = "contain";
			QL.style.backgroundRepeat = "no-repeat";
			QL.innerHTML = "Поярче?";	
		trdImg.splice(0,4);
		
		for (let i=13; i<=16; i++){	
			trdImg.push("url(pic/test/winter/" + i +".jpg");
			}
			QR.style.background = trdImg[Math.round(Math.random()*3)]; 
			QR.style.backgroundSize = "contain";
			QR.style.backgroundRepeat = "no-repeat";
			QR.innerHTML = "Поспокойнее?";
		trdImg.splice(0,4);
		
			QL.onclick = function(){
				let fthImg = [];
				for (let i=9; i<=10; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
					fthImg.splice(0,2);
					
					QL.style.pointerEvents='none';
					
				for (let i=11; i<=12; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");	
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.left
		
			QR.onclick = function(){
				let fthImg = [];
				for (let i=13; i<=14; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");	
				}
					QL.style.background = fthImg[Math.round(Math.random())]; 
					QL.style.backgroundSize = "contain";
					QL.style.backgroundRepeat = "no-repeat";
					QL.innerHTML = "Может быть этот?";
					
					QL.style.pointerEvents='none';
					
				fthImg.splice(0,2);
				
				for (let i=15; i<=16; i++){
					fthImg.push("url(pic/test/winter/" + i +".jpg");
				}
					QR.style.background = fthImg[Math.round(Math.random())]; 
					QR.style.backgroundSize = "contain";
					QR.style.backgroundRepeat = "no-repeat";
					QR.innerHTML = "Или вот этот?";
					
					QR.style.pointerEvents='none';
			}//third.onclick.right	
		
		}//secondQL.onclick.right
		
	}//firstQL.onclick.right
	
}//init