// ==UserScript==
// @author      Jan Kaiser
// @name        Imgur Grid Layout
// @namespace   https://github.com/Azlond/Imgur-Gridlayout-Forcer
// @description Forces gridlayout on imgur
// @include     https://imgur.com/gallery/*
// @include     https://imgur.com/a/*
// @version     1.2
// @grant       none
// ==/UserScript==

var currentLink = window.location + ""; // window.location contains the link of the currently visited website
var regex = new RegExp("grid", "i"); // Regular expression checking for "grid" 
var galleryID; // ID of the gallery

if (!regex.test(currentLink)) { // if there is no "grid" in the current url
	var res = currentLink.split("/"); // Split the url into an array of substrings by using the separator "/"
	if (currentLink.charAt(currentLink.length - 1) === "/") { // if the last character of the URL is a "/", the last element of the array res would be an empty string "".
		galleryID = res[res.length - 2]; // Because of this, we need to get the second to last element of the array, which is the ID of the gallery
	} else { // else: the url ends with the galleryID
		galleryID = res[res.length - 1]; // get the last element of the array, which is the ID of the gallery
	}
	window.location = "https://imgur.com/a/" + galleryID + "?grid"; // redirect to the gallery, but add "?grid" to the url, thereby forcing the grid layout
}
