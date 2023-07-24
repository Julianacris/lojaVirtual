var produtoJson = [
    {id:1,
    name:'Camisa Branca',
    img:'./img/camisa_manga_longa_branca_969_2_570746050630e5c18af2deeb46b4b0b6.webp',
    price:129.90,
    category:'feminino'},

    {id:2,
    name:'Bermuda',
    img:'./img/bermuda-infantil.jpg',
    price:49.90,
    category:'infantil'},

    {id:3,
    name:'Bermuda',
    img:'./img/bermuda-masculina.jpg',
    price:89.90,
    category:'masculino'},
    
    {id:4,
    name:'Calça Jeans',
    img:'./img/calca_jeans_jogger_feminina.webp',
    price:129.90,
    category:'feminino'},
    
    {id:5,
    name:'Calça Jeans',
    img:'./img/calca-jeans-masculina.webp',
    price:129.90,
    category:'masculino'},

    {id:6,
    name:'Camisa Branca',
    img:'./img/camisa_social_masculina_.webp',
    price:129.90,
    category:'masculino'},

    {id:7,
    name:'Camisa Xadrez',
    img:'./img/camisa-xadrez-feminina.jpg',
    price:99.90,
    category:'feminino'},

    {id:8,
    name:'Camisa Xadrez',
    img:'./img/camisa-xadrez-infantil.jpg',
    price:79.90,
    category:'infantil'},

    {id:9,
    name:'Camisa Xadrez',
    img:'./img/camisa-xadrez.jpg',
    price:129.90,
    category:'masculino'},

    {id:10,
    name:'Camiseta Branca',
    img:'./img/camiseta-branca-infantil.jpg',
    price:59.90,
    category:'infantil'},

    {id:11,
    name:'Casaco verde',
    img:'./img/casaco-verde-feminino.jpg',
    price:159.90,
    category:'feminino'},

    {id:12,
    name:'Casaco Verde',
    img:'./img/casaco-verde-masculino.jpg',
    price:159.90,
    category:'masculino'},

    {id:13,
    name:'Conjunto',
    img:'./img/conjunto-infantil.jpg',
    price:59.90,
    category:'infantil'},

    {id:14,
    name:'Moletom',
    img:'./img/moletom-masculino.jpg',
    price:119.90,
    category:'masculino'},

    {id:15,
    name:'Sueter',
    img:'./img/sueter-feminino.jpg',
    price:99.90,
    category:'feminino'},

    {id:16,
    name:'Sueter',
    img:'./img/sueter-infantil.jpg',
    price:59.90,
    category:'infantil'},

    {id:17,
    name:'Vestido',
    img:'./img/vestido-infantil-estampa.jpg',
    price:69.90,
    category:'infantil'},

    {id:18,
    name:'Vestido',
    img:'./img/vestido-longo.jpg',
    price:149.90,
    category:'feminino'},


];

function produtos() {
    var content = "";
    for (var i = 0; i < produtoJson.length; i++) {
      var produto = produtoJson[i];
      content += '<div class= " row g-3 col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">';
      content +='<img src="' + produto.img + '" class="card text-center bg-light" alt="Imagem ' +produto.id + '">';
      content += '<div class="card-body">';
      content += '<h5 class="card-title">' + produto.name + "</h5>";
      content += '<p class="card-text">' + produto.price + "</p>";
      content +=
        '<input id="buttonAdicionar" class="btn btn-dark" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
        i +
        ')">';
      content += "</div>";
      content += "</div>";
    }
    document.getElementById("produtos-container").innerHTML = content;
}
  
function pageFeminino() {
    var content = "";
    for (var i = 0; i < produtoJson.length; i++) {
      var produto = produtoJson[i];
      if (produto.category === "feminino") {
        content += '<div class="row g-3 col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">';
        content +=
          '<img src="' +
          produto.img +
          '" class="card-img-top" alt="Imagem ' +
          produto.id +
          '">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + produto.name + "</h5>";
        content += '<p class="card-text">' + produto.price + "</p>";
        content +=
          '<input id="buttonAdicionar" class="btn btn-dark" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
          i +
          ')">';
        content += "</div>";
        content += "</div>";
      }
    }
    document.getElementById("produtos-container").innerHTML = content;
}
  
function pageInfantil() {
    var content = "";
    for (var i = 0; i < produtoJson.length; i++) {
      var produto = produtoJson[i];
      if (produto.category === "infantil") {
        content += '<div class="row g-3 col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">';
        content +=
          '<img src="' +
          produto.img +
          '" class="card-img-top" alt="Imagem ' +
          produto.id +
          '">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + produto.name + "</h5>";
        content += '<p class="card-text">' + produto.price + "</p>";
        content +=
          '<input id="buttonAdicionar" class="btn btn-dark" type="button" value="Adicionar"  onclick="adicionarAoCarrinho(' +
          i +
          ')">';
        content += "</div>";
        content += "</div>";
      }
    }
    document.getElementById("produtos-container").innerHTML = content;
}
  
function pageMasculino() {
    var content = "";
    for (var i = 0; i < produtoJson.length; i++) {
      var produto = produtoJson[i];
      if (produto.category === "masculino") {
        content += '<div class="row g-3 col-xl-2 col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch">';
        content +=
          '<img src="' +
          produto.img +
          '" class="card-img-top" alt="Imagem ' +
          produto.id +
          '">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + produto.name + "</h5>";
        content += '<p class="card-text">' + produto.price + "</p>";
        content +=
          '<input id="buttonAdicionar" class="btn btn-dark" type="button" value="Adicionar" onclick="adicionarAoCarrinho('+i+')" >';
        content += "</div>";
        content += "</div>";
      }
    }
    document.getElementById("produtos-container").innerHTML = content;
}

