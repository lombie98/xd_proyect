

links=document.querySelectorAll("nav > a") //indica que el elemento a tiene que ser hijo del nav ::: ejemplo generico padre > hijos

links.forEach( funtion (link) { 
	console.log("el argumento link contiene:")
	console.log(link)
	link.onclick = function (evento){
		evento.preventDefault()
		console.log(evento)
		console.log(event.target.href)

		var rta = confirm("estas seguros??")

		if(rta){
			console.log(' ahora deneria ir a ')
			console.log(evento.target.href)
			window.location.href = evento.target.href
		}
		else{
			alert ("gracias por quedarte waching")
		}
	}
})

/*function clickEvent (link){
	console.log("en el argumento link hay:")
	console.log(link)
}*/


links.onclick (alert(message?: DOMString))