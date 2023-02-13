class TextToggle {
	constructor(options) {
		this._options = options;
		this._i = 0;
	}
	toggle() {
		this._text = this._options[this._i];
		this._i = ++this._i % this._options.length;
		return this._text;
	}
}

let numbers = new TextToggle(["One", "Two", "Three"]);
let animals = new TextToggle(["Cat", "Dog", "Sheep", "Cow", "Pig"]);

$(function () {
	$("#num-toggle").append($("<button/>").text("Toggle Numbers"));
	$("#num-toggle").append($("<p/>").text(numbers.toggle()));
	$("#num-toggle")
		.children("button")
		.click(function (e) {
			e.preventDefault();
			$("#num-toggle").children("p").text(numbers.toggle());
		});
	$("#animal-toggle").append($("<button/>").text("Toggle Animals"));
	$("#animal-toggle").append($("<p/>").text(animals.toggle()));
	$("#animal-toggle")
		.children("button")
		.click(function (e) {
			e.preventDefault();
			$("#animal-toggle").children("p").text(animals.toggle());
		});
});
