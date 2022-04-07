import Search from './Search';
import logo from '../../logo.svg';

export default function Header({ searchByTitle }) {
  return (
    <header>
      <img src={logo} width="50px" height="50px" alt="logo_image" />
      <Search searchByTitle={searchByTitle} />
      <p>Nada</p>
    </header>
  );
}
