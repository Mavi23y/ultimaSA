import './style.css'
import fotoMedico from './img/medico.png';
import fotoCalendario from './img/calendario.png';

function Inicio() {

  return (

    <>


      {/* Conteúdo do header */}
      <header id='topo'>
      </header>

      {/* Recursos */}
      <div id='recursos'>

        <div id='esqR'>

          <h1 id='tituloR'>
            CONTROLE SEUS RECURSOS
          </h1>

            <p id='textoR'>
              Pensando em suas necessidades, Oferecemos uma plataforma que permite uma melhor organização dos seus medicamentos.
            </p>

            <button id='btnR'>
              Peça seu medicamento aqui!
            </button>

        </div>

        <div id='dirR'>
          <img id='foto-medico' src={fotoMedico} alt="Foto do Médico" />
        </div>

      </div>

      {/* Fundo: Quem somos */}
      <div id='baseF1'> </div>
      <section className='fundo'></section>
      <div id='baseF2'> </div>

      {/* O que oferecemos */}
      <div id='Oqueoferecemos'>

        <div id='esqQ'>
          <p>oiiii</p>
        </div>

        <div id='dirQ'>
          
          <img id='foto-calendario' src={fotoCalendario} alt="Foto do Calendário" />
          <h1 id='tituloQ'>ORGANIZAÇÃO</h1>
          <p id='textoQ'>Organizamos seus horários, entregas e o cuidado com seus remédios. Uma planilha completa e organizada com todas as informações necessárias para o cuidado de seus produtos.</p>

        </div>

      </div>




    </>



  )
}



export default Inicio
