export class TextToggle {
	#options;
	#text;
	#i;
	constructor(options) {
		this.#options = options;
		this.#i = 0;
	}
	toggle() {
		this.#text = this.#options[this.#i];
		this.#i = ++this.#i % this.#options.length;
		return this.#text;
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
