var theme = 0;
const what = document.getElementById("what");
const todos = document.getElementById("todoss");
var count = 0;
const filters = ["todo","active","completed"];
var validfilter = 0;

function themechange(){
	theme++;
	document.body.classList.remove(document.body.classList.item(document.body.classList.length-1));
	document.body.classList.add("theme" + theme%2);
	check();
	
	if(theme%2 == 0){
		document.getElementById("theme-icon").src = "images/icon-sun.svg";
	}
	else{
		document.getElementById("theme-icon").src = "images/icon-moon.svg";
	}
}

function newtodo(){
	if(what.value == ""){
		alert("It is blank");
	}
	else{
		count++;
		let to = document.createElement("div");
		to.id = "todo" + count;
		to.classList.add("todo");
		to.classList.add("active");
		let content = "<div class='check'><button class='checkbox' onclick='done(" + count + ")'><img src='images/icon-check.svg'/></button></div><div class='mytodo'>" + what.value + "</div><div class='cl'></div><button onclick='deleteit(" + count + ")' class='del'><img src='images/icon-cross.svg'/></button>";
		to.innerHTML = content;
		todos.appendChild(to);
	}
	check();
	many();
	what.value = "";
}

function check(){
	if(count != 0){
		if(theme%2 == 0){
			document.getElementById("stat").style.borderTop = "1px solid rgba(255,255,255,.1)";
			for(i=1;i<document.getElementsByClassName("todo").length;i++){
				document.getElementsByClassName("todo")[i].style.borderTop = "1px solid rgba(255,255,255,.1)";
			}
		}
		else{
			document.getElementById("stat").style.borderTop = "1px solid rgba(0,0,0,.1)";
			for(i=1;i<document.getElementsByClassName("todo").length;i++){
				document.getElementsByClassName("todo")[i].style.borderTop = "1px solid rgba(0,0,0,.1)";
			}
		}
	}
}

function filter(a){
	validfilter = a;
	let wanted = filters[a];
	let all = filters[0];
	for(let s = 0;s<document.getElementsByClassName(all).length;s++){
		document.getElementsByClassName(all)[s].style.display = "none";
	}
	
	for(let s = 0;s<document.getElementsByClassName(wanted).length;s++){
		document.getElementsByClassName(wanted)[s].style.display = "block";
	}
	
	for(let d = 1;d<4;d++){
		let idd = "filter" + d;
		document.getElementById(idd).classList.remove("chosen");
	}
	
	let b = a+1;
	document.getElementById("filter" + b).classList.add("chosen");
}

function done(f){
	document.getElementById("todo" + f).classList.toggle("active");
	document.getElementById("todo" + f).classList.toggle("completed");
	filter(validfilter);
	many();
}

function many(){
	let number = document.getElementsByClassName("active").length - 1;
	document.getElementById("left").innerHTML = number;
}

function clearcompleted(){
	for(let y = 0;y<document.getElementsByClassName("completed").length;y++){
		document.getElementsByClassName("completed")[y].remove();
	}
}
	
function deleteit(k){
	document.getElementById("todo" + k).remove();
	many();
}
