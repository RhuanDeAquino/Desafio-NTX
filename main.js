function handleSearch () { 
	document.querySelector(".pesquisa").style.display='flex';
	document.querySelector(".pesquisa-icon").style.border='0.5px solid #fff';

 if (document.querySelector(".pesquisa").style.display=='none'){
 	document.querySelector(".pesquisa").style.display='flex';
 }
 else {
 	document.querySelector(".pesquisa").style.display="none";
 	document.querySelector(".pesquisa-icon").style.border='0.5px solid #fff';
 }
}