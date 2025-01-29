document.addEventListener('DOMContentLoaded', () => {
    const listaNotas = document.getElementById('listanotas');
    const aviso = document.getElementById('aviso');
    const clearAllButton = document.getElementById('clearAll');

    if (clearAllButton) {
        clearAllButton.addEventListener('click', () => {
            const confirmation = confirm('Tem certeza que deseja apagar todas as notas?');
            if (confirmation) {
                localStorage.removeItem('notas'); 
                listaNotas.innerHTML = ''; 
                aviso.style.display = 'block'; 
            }
        });
    } else {
        console.error('Botão clearAll não encontrado!');
    }

    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    if (notas.length > 0) {
        aviso.style.display = 'none';
        notas.forEach(nota => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${nota.titulo}</strong><p>${nota.texto}</p>`;
            listaNotas.appendChild(li);
        });
    }
});


const tituloInput = document.getElementById('titulonota');
const textoInput = document.getElementById('novanota');
const addNotaButton = document.getElementById('addnotas');


addNotaButton.addEventListener('click', () => {
    const titulo = tituloInput.value.trim();
    const texto = textoInput.value.trim();

    if (!titulo || !texto) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.push({ titulo, texto });
    localStorage.setItem('notas', JSON.stringify(notas));

    alert('Nota adicionada com sucesso!');
    window.location.href = 'index.html';
});