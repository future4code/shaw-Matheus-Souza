import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './img/perfil.png';
import Seta from './img/seta-baixo.png';
import Santa from './img/santa-casa.jpg';
import Email from './img/email.png';
import Local from './img/pin.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {FotoPerfil} 
          nome="Matheus de Azevedo de Souza" 
          descricao="Oi, eu sou o Matheus. Sou aluno da Labenu. Gosto de coisas ligadas a tecnologia, já estudei eletronica e design grafico, mas agora estou no caminho para me tornar um desenvolvedor web full stack."
        />
        
        <ImagemButton 
          imagem={Seta} 
          texto="Ver mais"
        />
        <CardPequeno
          imagem={Email}
          nome='Email:'
          descricao='matheus92as@gmail.com'        
        />
        <CardPequeno
          imagem={Local}
          nome='Endereço:'
          descricao='Porto Alegre'        
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Santa} 
          nome="Santa Casa de Porto Alegre" 
          descricao="Auxiliar técnico." 
        />
        
        <CardGrande 
          imagem={Santa} 
          nome="Santa Casa de Porto Alegre" 
          descricao="Técnico Eletrônico." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
