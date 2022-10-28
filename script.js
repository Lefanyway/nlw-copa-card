let isIgnite = true
function ChangeCard(event) {
      const card = event.currentTarget
      const backgroundImage = isIgnite 
      ? "url(./imagens/explorer.svg)" 
      : "url(./imagens/ignite.svg)"
      isIgnite = !isIgnite 
      card.style.backgroundImage = backgroundImage 
        
}