function enviarwhats(event) {
event.preventDefault()
  const nome = document.getElementById("nome").value;

  const menssagem = document.getElementById("menssagem").value;

  const telefone = "5538998100827";

  const texto = `Olá! Me chamo ${nome},${menssagem}`;

  const msgformatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgformatada}`;

  console.log(url)
  window.open(url, "_blank");
}
