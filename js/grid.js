function transfer(){
	var code = document.getElementById("code").innerText;

	document.getElementById("visuel").innerHTML = code;
}

function fill(fileUrl){

	fetch(fileUrl).then(f => f.text()).then(t => document.getElementById("code").innerText() = t);
}
fill('../html_exemples/grid_exemple.txt');
transfer();