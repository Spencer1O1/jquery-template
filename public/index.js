import { TextToggle, buildToggle } from "./toggle.js";

// Initialize items to toggle through
let numbers = new TextToggle(["One", "Two", "Three"]);
let animals = new TextToggle(["Cat", "Dog", "Sheep", "Cow", "Pig"]);

$(function () {
	// Build out the toggle element with the specified id
	buildToggle("num-toggle", "Toggle Numbers", numbers);
	buildToggle("animal-toggle", "Toggle Animals", animals);
});
