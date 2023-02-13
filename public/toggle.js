export class TextToggle {
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

export const buildToggle = (title, id, toggle) => {
	$(`#${id}`).append($("<button/>").text(title));
	$(`#${id}`).append($("<p/>").text(toggle.toggle()));
	$(`#${id}`)
		.children("button")
		.click(function (e) {
			e.preventDefault();
			$(`#${id}`).children("p").text(toggle.toggle());
		});
};
