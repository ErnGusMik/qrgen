    const reader = new FileReader();
    reader.onload = () => {
       return reader.result;
    }

const generateQR = () => {
    const options = {
        width: document.getElementById("width").value,
        height: document.getElementById('height').value,
        type: 'canvas',
        shape: document.querySelector("input[name='shape']:checked").value,
        data: document.getElementById('data').value,
        image: reader.readAsDataURL(document.getElementById('img')),
        margin: document.getElementById('margin').value,
        imageOptions: {
            hideBackgroundDots: document.getElementById('img_hide').checked
        }
    };
}