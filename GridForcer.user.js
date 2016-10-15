// ==UserScript==
// @author		Jan Kaiser
// @name        Imgur Grid Layout
// @namespace   https://github.com/Azlond/Imgur-Gridlayout-Forcer
// @description Forces gridlayout on imgur
// @include     https://imgur.com/gallery/*
// @include     https://imgur.com/a/*
// @version     1.0
// @grant       none
// ==/UserScript==

var currentLink = window.location + ""; //window.location contrains the link of the currently visited website
var regex = new RegExp("grid", "i"); // Regular expression to see if "grid" is in the URL

if (!regex.test(currentLink)) { // if there is no "grid" in the current url
	var res = currentLink.split("/"); // Split the url into an array of substrings by using the separator "/"
	var contentID = res[res.length - 1]; // get the last element of the array, which is the ID of the gallery
	window.location = "https://imgur.com/a/" + contentID + "?grid"; // redirect to the gallery, but add "?grid" to the url, thereby forcing the grid layout
}