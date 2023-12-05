import { useState } from 'react';
import '../components/css/Header.css';
import logo from '../assets/logo_site.png';
import SearchIcon from '@mui/icons-material/Search';
// import SearchAppBar from "./SearchBar";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const valores = [
    'Corte',
    'Barba',
    'Cabelo',
    'Sobrancelha',
    'Pigmentação',
    'Tintura',
    'Relaxamento',
    'Progressiva',
    'Valores',
    'Valor',
    'Preço',
    'Preco'
  ]
  const localizacao = [
    'Localização',
    'Localizaçao',
    'Localizacao',
    'Endereço',
    'Endereco',
    'Rua',
    'Bairro',
    'Cidade',
    'Estado',
  ]
  const horario = [
    'Horario',
    'Horário',
    'Hora',
    'Dia',
    'Semana',
    'Mes',
    'Mês',
    'Fecha',
    'Abre',
    'Agendar',
    'Agendamento',
    'Marcar',
  ]
  const sobre = [
    'Sobre',
    'Nossa história',
    'Nossa historia',
    'História',
    'Historia',
    'Sobre nós',
    'Sobre nos',
  ]

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      setSearchTerm('');
      alert('Digite algum termo de pesquisa');
      return;
    }
    if (searchTerm === 'Bruno' || searchTerm === 'bruno') {
      setSearchTerm('');
      window.location.href = 'https://api.whatsapp.com/send?phone=5511948105703';
      return;
    }
    if (searchTerm === 'Willian' || searchTerm === 'willian') {
      setSearchTerm('');
      window.location.href = 'https://api.whatsapp.com/send?phone=5511979604631';
      return;
    }
    if (sobre.map(item => item.toLowerCase()).includes(searchTerm.toLowerCase())) {
      setSearchTerm('');
      window.location.href = '#destaques';
      return;
    }
    if (valores.map(item => item.toLowerCase()).includes(searchTerm.toLowerCase())) {
      setSearchTerm('');
      window.location.href = '#tab-valores';
      return;
    }
    if (localizacao.map(item => item.toLowerCase()).includes(searchTerm.toLowerCase())) {
      setSearchTerm('');
      window.location.href = '#mapa';
      return;
    }
    if (horario.map(item => item.toLowerCase()).includes(searchTerm.toLowerCase())) {
      setSearchTerm('');
      window.location.href = '#horarios';
      return;
    }
    if (!valores.includes(searchTerm) || !localizacao.includes(searchTerm) || !horario.includes(searchTerm)) {
      setSearchTerm('');
      alert('Não encontramos o que você procura.');
      return;
    }
    console.log('Termo de pesquisa:', searchTerm);
  }

  return (
    <header id="main-header">
      <img src={logo} alt="Logo da Barbearia" className="logo" />

      <nav className="main-nav">
        <ul>
          <li><a href="#destaques">Sobre</a></li>
          <li><a href="#horarios">Horário</a></li>
          <li><a href="#tab-valores">Valores</a></li>
          <li><a href="#mapa">Localização</a></li>
        </ul>
      </nav>

      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="icone-lupa"><SearchIcon /></button>
      </form>
    </header>
  );
}
export default Header;
