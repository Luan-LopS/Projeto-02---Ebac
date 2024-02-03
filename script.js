const form = document.getElementById('form-atividade')
const imgAprovado = '<img src = "./images/aprovado.png" alt = "Emoji Celebrando"/>'
const imgAprovado = '<img src = "./images/reprovado.png" alt = "Emoji decepcionado"/>'

let linhas  = ''

form.addEventListener('submit',function(e){
    e.preventDefault()

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    let linha = '<tr>'
    linha +=`<td> ${inputNomeAtividade}</td> ` 
    linha +=`<td> ${inputNotaAtividade}</td> `
    linha +=`<td> ${inputNotaAtividade.value>= 7 ? 'Aprovado' : 'Resprovado'}</td> `
    linha += '<tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
})