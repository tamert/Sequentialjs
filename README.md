stepbystep
==========

stepbystep is basic jQuery step effect plugin for all objects

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
$('ul').stepbystep({
	effect : "slide", // slide or fade
	speed : 3000, // animate speed
	wait : 100, // time of wait
},function(){
	alert("complate!");
});
```
Random
```js
$('ul').stepbystep({
	random : true
},function(){
	alert("complate!");
});
```
One by One
```js
$('ul').stepbystep({
	onebyone : true
},function(){
	alert("complate!");
});
```

