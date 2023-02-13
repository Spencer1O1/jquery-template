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

export const buildToggle = (id, title, toggle) => {
	const el = $(`#${id}`);
	if (!el.length) throw new Error(`The element with id ${id} does not exist!`);
	el.append($("<button/>").text(title));
	el.append($("<p/>").text(toggle.toggle()));
	el.children("button").click(function (e) {
		e.preventDefault();
		el.children("p").text(toggle.toggle());
	});
};
