var add = document.getElementById('addElem')

var list = document.getElementById('list')

var number = document.getElementsByTagName('li')

var i = number.length;
console.log(i),

add.addEventListener('click', function(i){
	var element = document.createElement('li');
	for (j = 0; j < i; j++) {
		element.innerHtml = 'item' + j;
		list.appendChild(element);	
	}
});