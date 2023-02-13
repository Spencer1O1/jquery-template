import { TextToggle, buildToggle } from "./toggle.js";

// Initialize items to toggle through
let numbers = new TextToggle(["One", "Two", "Three"]);
let animals = new TextToggle(["Cat", "Dog", "Sheep", "Cow", "Pig"]);

$(function () {
	buildToggle("Toggle Numbers", "num-toggle", numbers);
	buildToggle("Toggle Animals", "animal-toggle", animals);
});
