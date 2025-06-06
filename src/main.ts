import './style.css'


const url = new URL(window.location.href);
const params = url.searchParams
// const params = new URLSearchParams(window.location.search)
const id = params.get("id") as string;
const result = await fetch(`http://localhost:3000/usuarios/`)
const body = await result.json()
// const idPo = id[0]

// const usuario = body.usuarios.find((u: any) => u.id === id)

// if (usuario) {
//   console.log(usuario.nome)
  const imgContainer = document.querySelector<HTMLDivElement>("#Cimg")
  const botaoContainer = document.querySelector<HTMLDivElement>("#Cbotao")
  if (imgContainer) {
    imgContainer.innerHTML = 
    `   <div class="container-imagem"style="background-image: ${body[0].foto_fundo};">
        <img src="${body[0].foto_url}" alt="Foto de perfil" class="perfil">
    </div>
    


    

    
    `
  } 
//   }else{
//     console.error("Usuário não encontrado")
//   }
// }