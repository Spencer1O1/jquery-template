let i = 0;
const toggle = () => {
	let text;
	try {
		switch (i) {
			case 0:
				text = "One";
				break;
			case 1:
				text = "Two";
				break;
			case 2:
				text = "Three";
				break;
			default:
				throw new Error("Toggle counter went out of bounds!");
				break;
		}
	} catch (e) {
		text = "[OOB]";
	}
	i = ++i % 3;
	return text;
};

$(function () {
	$("#toggle-text").text(toggle());

	$("#toggle").click(function (e) {
		e.preventDefault();
		$("#toggle-text").text(toggle());
	});
});
