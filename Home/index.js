function moeda(a, e, r, t) {
    let n = ""
      , h = j = 0
      , u = tamanho2 = 0
      , l = ajd2 = ""
      , o = window.Event ? t.which : t.keyCode;
      a.value = a.value.replace('R$ ','');            
    if (n = String.fromCharCode(o),
    -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.replace('R$ ','').length,
    h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
        ;
    for (l = ""; h < u; h++)
        -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "R$ 0" + r + "0" + l),
    2 == u && (a.value = "R$ 0" + r + l),
    u > 2) {
        for (ajd2 = "",
        j = 0,
        h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
            j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "R$ ",
        tamanho2 = ajd2.length,
        h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}

let campoNome = document.querySelector('#campoNome');
let campoMensalidade = document.querySelector('#campoMensalidade');
let campoTempo = document.querySelector('#campoTempo');

function btnSimular() {
  let result;
  console.log(campoNome.value)
  console.log(campoMensalidade.value)
  console.log(campoTempo.value)


  let valorCampoMensalidade = campoMensalidade.value
  valorCampoMensalidade = valorCampoMensalidade.replace(/[R$ ]/g, '')
  valorCampoMensalidade = valorCampoMensalidade.replace(/[,]/g, '.')


  let _data = {
    "expr": [
      `${valorCampoMensalidade} * (((1 + 0.00517) ^ ${campoTempo.value} - 1) / 0.00517)`
    ],

  
  "precision": 5
  }

  fetch('http://api.mathjs.org/v4/', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: { "content-type": "application/json" }
  })
    .then(response => response.json())
    .then(json => {
      result = json.result[0]
      window.localStorage.setItem('valorTotal', result)
      window.localStorage.setItem('nome', campoNome.value)
      window.localStorage.setItem('mensalidade', campoMensalidade.value)
      window.localStorage.setItem('tempo', campoTempo.value)
      window.location.href = "../Resultado/resultado.html";
    })
    .catch(err => console.log(err));
}
