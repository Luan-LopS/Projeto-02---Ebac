const form = document.getElementById('form-atividade')
const imgAprovado = '<img src = "./images/aprovado.png" alt = "Emoji Celebrando"/>'
const imgAprovado = '<img src = "./images/reprovado.png" alt = "Emoji decepcionado"/>'
const Atividades = []
const notas = []
const spanAprovado = `<span class=""resultado aprovado>Aprovado</span>`
const spanReprovado = `<span class=""resultado reprovado>Reprovado</span>`

let linhas  = ''



form.addEventListener('submit',function(e){
    e.preventDefault()

    addLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function addLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    if(Atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida `)
    } else{
        Atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))
    
        let linha = '<tr>'
        linha +=`<td> ${inputNomeAtividade}</td> ` 
        linha +=`<td> ${inputNotaAtividade}</td> `
        linha +=`<td> ${inputNotaAtividade.value>= 7 ? 'Aprovado' : 'Resprovado'}</td> `
        linha += '<tr>'
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMedia()

    document.getElementById('media').innerHTML = mediaFinal
    document.getElementById('media-final').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado

}

function calculaMedia(){
    let somaNota = 0

    for(let i = 0; i< notas.length; i++){
        somaNota += notas[i]
    }

    return media = somaNota/notas.length
}