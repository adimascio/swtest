function dragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

function fileDropped(e) {
    dragHover(e);
    const files = e.target.files || e.dataTransfer.files;
    const formData = new FormData();
    formData.append('thefile', files[0]);
    fetch('/', { method: 'PUT', body: formData })
        .then(response => response.text())
        .then(text => console.log(`got response ${text}`));
}

document.addEventListener('DOMContentLoaded', () => {
    const dropzone = document.querySelector("#dropzone");
    dropzone.addEventListener("dragover", dragHover, false);
    dropzone.addEventListener("dragleave", dragHover, false);
    dropzone.addEventListener("drop", fileDropped, false);
});

navigator.serviceWorker.register('/sw.js', { scope: '/' });
