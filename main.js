arrow = document.getElementById('updw');
hlfnvc =document.getElementById('hlfnvc');
function updwtgl() {
 	var panel = arrow;
        if (panel.style.marginLeft === "2.5px") {
            panel.style.transform = "rotate(405deg)";
			panel.style.marginLeft = "10px";
			panel.style.verticalAlign="0px";
        } else {
            panel.style.transform = "rotate(0)";
			panel.style.marginLeft = "2.5px";
			panel.style.verticalAlign="0.5px";
        }
 }
function shtgl(){
	updwtgl();
	if (hlfnvc.style.display==='none'){
		hlfnvc.style.display='block';
	}else{
		hlfnvc.style.display='none';
	}
}