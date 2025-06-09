import './style.css'

const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get("id") as string;
const result = await fetch(`http://localhost:3000/usuarios/`);
const body = await result.json();
const idIndex = parseInt(id) - 1;

const imgContainer = document.querySelector<HTMLDivElement>("#Cimg");

if (imgContainer && id !== null && body[idIndex]) {

  document.body.style.background = body[idIndex].cor_fundo;

  const contornoEstilo = body[idIndex].contorno ? `border: 2px solid ${body[idIndex].contorno};` : '';

  const hoverBotao = body[idIndex].hover_botao;
  
  const botoesHTML = (body[idIndex].links as any[]).map((link) => `
    <a href="${link.url}">
      <div class="botao" style="background: ${body[idIndex].cor_botao}; border-radius: ${body[idIndex].border}; ${contornoEstilo}; ${hoverBotao} ">
        <img src="${link.icone}" class="icone" ">
        <p class="texto" style="color: ${body[idIndex].cor_texto}">${link.tipo}</p>
      </div>
    </a>
  `).join("");

  imgContainer.innerHTML = `

    <div class="container-imagem" style="background-image: ${body[idIndex].foto_fundo};">
      <img src="${body[idIndex].foto_url}" alt="Foto de perfil" class="perfil" width="100px" height="100px">
      <h1>${body[idIndex].nome}</h1>
      <div class="container-botao">
        ${botoesHTML}
      </div>
      <div class="container-qrcode">
        <img src="${body[idIndex].qr_code}" class="qrcode">
      </div>
    </div>
  `;

  const botoes = imgContainer.querySelectorAll<HTMLDivElement>('.botao');

  botoes.forEach(botao => {
    const bgOriginal = botao.style.background;

    botao.addEventListener('mouseenter', () => {
      botao.style.background = hoverBotao;
    });

    botao.addEventListener('mouseleave', () => {
      botao.style.background = bgOriginal;
    });
  });
}
