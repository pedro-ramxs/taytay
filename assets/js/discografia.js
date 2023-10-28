document.addEventListener("readystatechange", () => {
	setTimeout(() => {
		document.getElementById("loading").style.display = "none";
		document.getElementById("conteudo").style.display = "block";
	}, 1000);
});
