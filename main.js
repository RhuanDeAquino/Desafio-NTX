function handleSearch () { 
	if (document.querySelector(".pesquisa").style.display == 'none'){
	 	document.querySelector(".pesquisa").style.display = 'flex';
	 	document.querySelector(".atividades-informacoes").style.border = '0.1px solid #fff';

	}
	else {
	 	document.querySelector(".pesquisa").style.display = "none";
	 	document.querySelector(".atividades-informacoes").style.border="none";
	}
}


function handleOpenMenu () {
	if (document.querySelector(".lista-perfil").style.display = 'none') {
		document.querySelector(".lista-perfil").style.display = 'flex'
		document.querySelector(".caixa-perfil").style.border = '0 solid white';
}
	else {
		document.querySelector(".lista-perfil").style.display = "flex";
		document.querySelector(".caixa-perfil").style.border="flex"
	}
}




function handleOpenNotificacao () {
	if (document.querySelector(".lista-notif").style.display = 'none') {
		document.querySelector(".lista-notif").style.display = 'flex'
		document.querySelector(".caixa-notif").style.border = '0';
}
	else {
		document.querySelector(".lista-notif").style.display = "flex";
		document.querySelector(".caixa-notif").style.border="none"
	}
}