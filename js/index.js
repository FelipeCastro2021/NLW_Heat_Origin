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

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url //Troca o valor da URL
      userImage.src = data.avatar_url
      userLogin.textContent = `@${data.login}`
    })
}

getGithubProfileInfos()
