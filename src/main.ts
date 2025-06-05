import './style.css'


const params = new URLSearchParams(window.location.search)
const id = params.get("id")
const result = await fetch(`http://localhost:5173/dados.json`)
const body = await result.json()


const usuario = body.usuarios.find((u: any) => u.id === id)

if (usuario) {
  const imgContainer = document.querySelector<HTMLDivElement>("#Cimg")
  if (imgContainer) {
    imgContainer.innerHTML = `
    <div>
        <img src="${usuario.foto_fundo}">
    </div>
`}
  }else{
    console.error("Usuário não encontrado")
  }