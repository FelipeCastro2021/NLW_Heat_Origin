const linksSocialMedia = {
  github: 'FelipeCastro2021',
  youtube: 'channel/UCkxTJmdDnrrX9LMh5KKy_sg',
  instagram: 'felipe_ryfer',
  facebook: 'profile.php?id=100004327594837',
  twitter: ''
}

// function changeSocialMediaLinks() {
//   // Pode acessar os valores do objeto sem passá-los como argumentos
//   //// document.getElementById('userName').textContent = 'Ryan Castro Ferreira'
//   userName.textContent = 'Rildo Ferreira dos Santos'
// }

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

console.log(socialLinks.children)

changeSocialMediaLinks()
