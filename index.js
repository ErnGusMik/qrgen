const reader = new FileReader();
reader.onload = () => {
    return reader.result;
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
                ? reader.readAsDataURL(document.getElementById("img"))
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
            // gradient: dotsGradient
            //     ? {
            //           type: "linear",
            //           rotation:
            //               document.getElementById("dots_col_grad_rot").value *
            //               (Math.PI / 180),
            //           colorStops: [
            //               {
            //                   offset: 0,
            //                   color: document.getElementById("dots_col_grad1")
            //                       .value,
            //               },
            //               {
            //                   offset: 1,
            //                   color: document.getElementById("dots_col_grad2")
            //                       .value,
            //               },
            //           ],
            //       }
            //     : {colorStops: []},
        },
        backgroundOptions: {
            // BACKGROUND
            color: backgroundGradient
                ? ""
                : document.getElementById("backg_col_col").value,
            // gradient: backgroundGradient
            //     ? {
            //           type: "linear",
            //           rotation:
            //               document.getElementById("backg_col_grad_rot").value *
            //               (Math.PI / 180),
            //           colorStops: [
            //               {
            //                   offset: 0,
            //                   color: document.getElementById("backg_col_grad1")
            //                       .value,
            //               },
            //               {
            //                   offset: 1,
            //                   color: document.getElementById("backg_col_grad2")
            //                       .value,
            //               },
            //           ],
            //       }
            //     : {colorStops: []},
        },
        cornersSquareOptions: {
            // OUTER CORNER
            type: document.getElementById("ocorn_style").value,
            color: ocornGradient
                ? ""
                : document.getElementById("ocorn_col_col").value,
            // gradient: ocornGradient
            //     ? {
            //           type: "linear",
            //           rotation:
            //               document.getElementById("ocorn_col_grad_rot").value *
            //               (Math.PI / 180),
            //           colorStops: [
            //               {
            //                   offset: 0,
            //                   color: document.getElementById("ocorn_col_grad1")
            //                       .value,
            //               },
            //               {
            //                   offset: 1,
            //                   color: document.getElementById("ocorn_col_grad2")
            //                       .value,
            //               },
            //           ],
            //       }
            //     : {colorStops: []},
        },
        cornersDotOptions: {
            // INNER CORNER
            type: document.getElementById("icorn_style").value,
            color: icornGradient
                ? ""
                : document.getElementById("icorn_col_col").value,
            // gradient: icornGradient
            //     ? {
            //           type: "linear",
            //           rotation:
            //               document.getElementById("icorn_col_grad_rot").value *
            //               (Math.PI / 180),
            //           colorStops: [
            //               {
            //                   offset: 0,
            //                   color: document.getElementById("icorn_col_grad1")
            //                       .value,
            //               },
            //               {
            //                   offset: 1,
            //                   color: document.getElementById("icorn_col_grad2")
            //                       .value,
            //               },
            //           ],
            //       }
            //     : {colorStops: []},
        },
    };

    const qrCode = new QRCodeStyling(options);
    const canvas = document.getElementById("canvas");

    if (canvas.hasChildNodes()) {
        canvas.removeChild(canvas.firstChild);
    }
    qrCode.append(canvas);
};

document.querySelector("form").addEventListener("change", generateQR);
generateQR()