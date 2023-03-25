window.addEventListener('DOMContentLoaded', function() {
	document.getElementsByClassName('badge')[0].style = 'display: none'
	let offer = 0
	for(offer; offer < document.getElementsByClassName('product-list-thumb-status').length; offer++) {
		if(document.getElementsByClassName('product-list-thumb-status')[offer].innerHTML === 'Sold out') {
			document.getElementsByClassName('product-list-thumb-status')[1].parentElement.parentElement.parentElement.parentElement.style = 'opacity: 50%'
		}
	}

	// 🌐 TŁUMACZENIA 🌐

	// header
	document.getElementsByClassName('header-nav')[0].firstElementChild.lastElementChild.firstElementChild.innerHTML = "KOSZYK " + document.getElementsByClassName('header-nav')[0].firstElementChild.lastElementChild.firstElementChild.innerHTML.slice(4)

	// koszyk
	document.getElementsByClassName('empty-cart-message')[0].innerHTML = '<p class="empty-cart-message centered-message">Twój koszyk jest pusty! To dobry czas by <a href="/products" title="Start shopping">coś wybrać</a>.</p>'
	document.getElementsByClassName('checkout-btn')[0].innerHTML = 'Realizuj zamówienie'
	document.getElementsByClassName('continue-shopping')[0].innerHTML = 'Kontynuuj zakupy'
	document.getElementsByClassName('cart-subtotal')[0].firstChild.nodeValue = 'Suma'
	
	// kontakt
	document.getElementsByClassName('contact-name')[0].firstElementChild.innerHTML = 'Imię'
	document.getElementsByClassName('contact-email')[0].firstElementChild.innerHTML = 'Adres e-mail'
	document.getElementsByClassName('contact-subject')[0].firstElementChild.innerHTML = 'Temat'
	document.getElementsByClassName('contact-message')[0].firstElementChild.innerHTML = 'Wiadomość'
	document.getElementsByClassName('send-message-button')[0].innerHTML = 'Wyślij wiadomość'
})

/*
if(document.getElementsByClassName('product-list-thumb-status')[1].innerHTML === 'Sold out') {
    document.getElementsByClassName('product-list-thumb-status')[1].parentElement.parentElement.parentElement.parentElement.style = 'opacity: 50%'
}
*/