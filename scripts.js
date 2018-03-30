var add = document.getElementById('addElem');

var list = document.getElementById('list');

var number = document.getElementsByTagName('li');

var l = number.length;
console.log(l),

add.addEventListener('click', function(){
	l++;
	var element = document.createElement('li');
	element.innerHTML = 'item ' + l; 
	list.appendChild(element);	
});