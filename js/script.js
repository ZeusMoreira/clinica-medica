const botaoVideo = document.querySelector('#btn-video')
const botaoCasaPaciente = document.querySelector('#btn-casa-paciente')
const botaoFlutuante = document.querySelector('#btn-flutuante')
const telaEscura = document.querySelector('.tela-escurecida')

botaoFlutuante.addEventListener('click', () => {
    expandirAcoes()
})

telaEscura.addEventListener('click', () => {
    botaoVideo.style.display = 'none';
    botaoCasaPaciente.style.display = 'none';
    telaEscura.style.display = 'none';
})

function expandirAcoes(){
    const estiloTela = window.getComputedStyle(telaEscura);
    if (estiloTela.display === 'none') {
        botaoVideo.style.display = 'flex';
        botaoCasaPaciente.style.display = 'flex';
        telaEscura.style.display = 'block'; 
    } else {
        botaoVideo.style.display = 'none';
        botaoCasaPaciente.style.display = 'none';
        telaEscura.style.display = 'none';
    }
}