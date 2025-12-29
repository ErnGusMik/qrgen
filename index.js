let qrCode;
let currentImageData = null;

const reader = new FileReader();
reader.onload = () => {
    currentImageData = reader.result;
    generateQR();
};

const generateQR = () => {
    const dotsGradient = document.getElementById("dots_coltype_grad").checked;
    const backgroundGradient =
        document.getElementById("backg_coltype_grad").checked;
    const ocornGradient = document.getElementById("ocorn_coltype_grad").checked;
    const icornGradient = document.getElementById("icorn_coltype_grad").checked;

    const options = {
        // MAIN
        width: document.getElementById("width").value,
        height: document.getElementById("height").value,
        type: "canvas",
        shape: document.querySelector("input[name='shape']:checked").value,
        data: document.getElementById("data").value,
        image:
            document.getElementById("img").value != ""
                ? currentImageData
                : "",
        margin: document.getElementById("margin").value,
        imageOptions: {
            // IMAGE
            hideBackgroundDots: document.getElementById("img_hide").checked,
            imageSize: document.getElementById("img_size").value,
            margin: document.getElementById("img_margin").value,
        },
        dotsOptions: {
            // DOTS
            type: document.getElementById("dots_style").value,
            color: dotsGradient
                ? ""
                : document.getElementById("dots_col_col").value,
        },
        backgroundOptions: {
            // BACKGROUND
            color: backgroundGradient
                ? ""
                : document.getElementById("backg_col_col").value,
        },
        cornersSquareOptions: {
            // OUTER CORNER
            type: document.getElementById("ocorn_style").value,
            color: ocornGradient
                ? ""
                : document.getElementById("ocorn_col_col").value,
        },
        cornersDotOptions: {
            // INNER CORNER
            type: document.getElementById("icorn_style").value,
            color: icornGradient
                ? ""
                : document.getElementById("icorn_col_col").value,
        },
    };

    if (dotsGradient) {
        options.dotsOptions.gradient = {
            type: "linear",
            rotation:
                document.getElementById("dots_col_grad_rot").value *
                (Math.PI / 180),
            colorStops: [
                {
                    offset: 0,
                    color: document.getElementById("dots_col_grad1").value,
                },
                {
                    offset: 1,
                    color: document.getElementById("dots_col_grad2").value,
                },
            ],
        };
    }

    if (backgroundGradient) {
        options.backgroundOptions.gradient = {
            type: "linear",
            rotation:
                document.getElementById("backg_col_grad_rot").value *
                (Math.PI / 180),
            colorStops: [
                {
                    offset: 0,
                    color: document.getElementById("backg_col_grad1").value,
                },
                {
                    offset: 1,
                    color: document.getElementById("backg_col_grad2").value,
                },
            ],
        };
    }

    if (ocornGradient) {
        options.cornersSquareOptions.gradient = {
            type: "linear",
            rotation:
                document.getElementById("ocorn_col_grad_rot").value *
                (Math.PI / 180),
            colorStops: [
                {
                    offset: 0,
                    color: document.getElementById("ocorn_col_grad1").value,
                },
                {
                    offset: 1,
                    color: document.getElementById("ocorn_col_grad2").value,
                },
            ],
        };
    }

    if (icornGradient) {
        options.cornersDotOptions.gradient = {
            type: "linear",
            rotation:
                document.getElementById("icorn_col_grad_rot").value *
                (Math.PI / 180),
            colorStops: [
                {
                    offset: 0,
                    color: document.getElementById("icorn_col_grad1").value,
                },
                {
                    offset: 1,
                    color: document.getElementById("icorn_col_grad2").value,
                },
            ],
        };
    }

    if (qrCode) {
        qrCode.update(options);
        document.querySelector("canvas").style.background = backgroundGradient
            ? `linear-gradient(${
                  document.getElementById("backg_col_grad_rot").value
              }deg, ${document.getElementById("backg_col_grad1").value}, ${
                  document.getElementById("backg_col_grad2").value
              })`
            : document.getElementById("backg_col_col").value;
        return;
    }

    qrCode = new QRCodeStyling(options);
    const canvas = document.getElementById("canvas");

    qrCode.append(canvas);
};

document.querySelector("form").addEventListener("change", generateQR);
generateQR();


document.getElementById("download").addEventListener("click", () => {
    qrCode.download({
        extension: "png",
    });
});

document.getElementById("img").addEventListener("change", (e) => {
    reader.readAsDataURL(e.target.files[0]);
});