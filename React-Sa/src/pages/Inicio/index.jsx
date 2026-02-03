import './style.css'
import fotoMedico from './img/medico.png';
import fotoCalendario from './img/calendario.png';
import fotoQuemSomos from './img/quemSomos.png';

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

      <section id='quem-somos'>
        <div id='fundo'>
           <div id='baseF1'> </div>
           <div id='fundoGR'></div>
           <div id='baseF2'> </div>
        </div>
        
        <div id='conteudo-sobre'>

          {/* Lado esquerdo (texto) */}

          <div id='ladoTxt'>
            <h1 id='tituloS'>QUEM SOMOS?</h1>
          <p id='textoS'>Somos um sistema de segurança de ponta, voltado para gerenciar e controlar os medicamentos da área da saúde. 
          Nosso site conta com diversas funcionalidades.
          incluindo: pedido de reposição de estoque, prontuário online, controle rigoroso de entrada e saída de medicamentos e um chat interno para comunicação rápida com nossa equipe."</p>
          </div>

          {/* Lado direito (imagem) */}

           <div id='ladoImg'>
             <img id='foto-quem-somos' src={fotoQuemSomos} alt="Foto de Quem Somos" />
          </div>

        </div>

      </section>
      

      {/* O que oferecemos */}
      <div id='Oqueoferecemos'>

        <div id='esqQ'>
          <p>oiiii</p>
        </div>

        <div id='dirQ'>
          
          <img id='foto-calendario' src={fotoCalendario} alt="Foto do Calendário" />
          {/* <h1 id='tituloQ'>ORGANIZAÇÃO</h1>
          <p id='textoQ'>Organizamos seus horários, entregas e o cuidado com seus remédios. Uma planilha completa e organizada com todas as informações necessárias para o cuidado de seus produtos.</p> */}

        </div>

      </div>




    </>



  )
}



export default Inicio
