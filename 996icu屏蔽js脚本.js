for(var x of document.getElementsByClassName("body"))
{
	if (x.innerHTML.indexOf("script") >= 0)
		x.innerHTML = "";
}
