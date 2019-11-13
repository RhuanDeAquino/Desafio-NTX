function mudarCor(event) {
	if (window.scroll <= 0) {
		document.querySelector('header').style.background = 'transparent';
	}
	else {
		document.querySelector('header').style.background = '#ffff';
	}
}

function handleSearch () { 
	if (document.querySelector(".pesquisa").style.display == 'none'){
	 	document.querySelector(".pesquisa").style.display = 'flex',
	 	document.querySelector(".atividades-informacoes").style.border = '0.1px solid #fff';

	}
	else {
	 	document.querySelector(".pesquisa").style.display = "none",
	 	document.querySelector(".atividades-informacoes").style.border="none";
	}
}
/////////////////////////////////////menu///////////////////////////////////////////////
function handleOpenMenu() {
	if (document.querySelector(".lista-perfil").style.display == 'none') {
		document.querySelector(".lista-perfil").style.display = 'flex';
}
	else {
		document.querySelector(".lista-perfil").style.display = "none";
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////notificacao//////////////////////////////////////////////////
function handleOpenNotificacao () {
	if (document.querySelector(".lista-notif").style.display == 'none') {
		document.querySelector(".lista-notif").style.display = 'flex';
}
	else {
		document.querySelector(".lista-notif").style.display = "none";
	}
}
function handleTroca() {
	if(document.querySelector(".caixa-titulos").style.display = 'flex') {
		document.querySelector(".caixa-titulos").style.display = 'none'
		document.querySelector(".caixa-titulos2").style.display = 'flex'
	}
	else {
		document.querySelector(".caixa-titulos").style.display = 'flex'
		document.querySelector(".caixa-titulos2").style.display = 'none'
	}
}