stepbystep
==========

stepbystep is basic jQuery step effect plugin for all objects

How to use
==========

```html
<ul>
	<li>test 1</li>
	<li>test 2</li>
	<li>test 3</li>
	<li>test 4</li>
	<li>test 5</li>
	<li>test 6</li>
	<li>test 7</li>
</ul>
```

Basic
```js
$('ul li').stepbystep({
	start : false, // close for false or open for true
	effect : "slide", // slide or fade
	speed : 3000, // animate speed
	wait : 100 // time of wait
},function(){
	alert("complate!");
});
```
Random
```js
$('ul li').stepbystep({
	start : false, // close for false or open for true
	random : true
},function(){
	alert("complate!");
});
```
One by One
```js
$('ul li').stepbystep({
	start : false, // close for false or open for true
	onebyone : true
},function(){
	alert("complate!");
});
```

