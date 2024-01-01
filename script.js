const inputURL = document.querySelector('.input'),
    Btn = document.querySelector('.btn');

inputURL.focus();

Btn.addEventListener('click', (e) => {
    e.preventDefault();
    Btn.innerHTML='Downloading....'
    Downloadfetch(inputURL.value);

});

function Downloadfetch(url) {
    fetch(url).then(res => res.blob())
        .then(file => {
            const tempURL = URL.createObjectURL(file);
            const aTag = document.createElement('a');
            aTag.href=tempURL;
            aTag.download= url.replace(/^.[\\\/]/,'');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
            URL.revokeObjectURL(tempURL);
            Btn.innerHTML='Download'
        })
        .catch(err => alert("Error : Download Failed"))
}