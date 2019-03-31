<script> for(var x of document.getElementsByClassName("body"))
{
	if (x.innerHTML.indexOf("script") >= 0)
		x.innerHTML = "";
}
</script>
反注入补丁
&lt;script&gt; for(var x of document.getElementsByClassName(&quot;body&quot;))
{
	if (x.innerHTML.indexOf(&quot;script&quot;) &gt;= 0)
		x.innerHTML = &quot;&quot;;
}
&lt;script&gt;
