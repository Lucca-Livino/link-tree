import './style.css'


const url = new URL(window.location.href);
const params = url.searchParams
const id = params.get("id") as string;
const result = await fetch(`http://localhost:3000/usuarios/`)
const body = await result.json()
const idIndex = parseInt(id) - 1


const imgContainer = document.querySelector<HTMLDivElement>("#Cimg")


if (imgContainer && id !== null) {
  imgContainer.innerHTML = `
    <div class="container-imagem" style="background-image: ${body[idIndex].foto_fundo};">
      <img src="${body[idIndex].foto_url}" alt="Foto de perfil" class="perfil" width="100px" height="100px">
      <h1>${body[idIndex].nome}</h1>
      <div class="container-botao">
        <a href="${body[idIndex].links[0].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>Blog</p>
          </div>
        </a>
        <a href="${body[idIndex].links[1].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>GitLab</p>
          </div>
        <a href="${body[idIndex].links[2].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>Github</p>
          </div>
        <a href="${body[idIndex].links[3].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>Linkedin</p>
          </div>
        <a href="${body[idIndex].links[4].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>Instagram</p>
          </div>
        <a href="${body[idIndex].links[5].url}">
          <div class="botao" style="background-color: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border};">
            <p>Enviar um e-mail</p>
          </div>
      </a>
      </div>
    </div>
  `
}

