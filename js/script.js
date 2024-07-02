// Array degli elementi della lista della spesa
const listaDellaSpesa = ['Pane', 'Latte', 'Uova', 'Frutta', 'Verdura'];

// Elemento HTML dove verrà visualizzata la lista della spesa
const listaSpesaElement = document.getElementById('listaSpesa');

// Inizializzazione dell'indice per il ciclo while
let i = 0;
let listaHtml = '<ul>'; // Inizia la lista non ordinata

// Ciclo while per costruire la lista della spesa
while (i < listaDellaSpesa.length) {
    listaHtml += `<li>${listaDellaSpesa[i]}</li>`; // Aggiungi ogni elemento come list item
    i++;
    // Stampa il valore dell'indice e l'elemento corrispondente
    console.log(`Indice: ${i}, Elemento: ${listaDellaSpesa[i]}`);
}

// Inserisci la lista della spesa nell'elemento HTML
listaSpesaElement.innerHTML = listaHtml;