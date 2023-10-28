document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
	new bootstrap.Tooltip(el);
});

const formNewsletter = document.getElementById("form-newsletter");
formNewsletter.addEventListener(
	"submit",
	(ev) => {
		ev.preventDefault();
		if (formNewsletter.checkValidity()) {
			const m = new bootstrap.Modal("#modal");
			m.show();
			formNewsletter.reset();
			formNewsletter.classList.remove("was-validated");
		} else {
			ev.stopPropagation();
			formNewsletter.classList.add("was-validated");
		}
	},
	false
);
