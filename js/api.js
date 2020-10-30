window.addEventListener('load', (e) => {
    const resultado = document.getElementById("response-ajax");
        var page = `https://xkcd.com/${Math.floor(Math.random()*2000)}/info.0.json`;
        var settings = {
            "url": page,
            "method": "GET",
            "timeout": 0,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            "mode": "no-cors"
        };
        $.ajax(settings).done(function (response) {
            var get_img = response.img;
            var get_title = response.title;
            resultado.innerHTML = `<p class="texto">${get_title}</p>` + `<img class="img_pantalla" src="${get_img}"></img>`;
        });
});
