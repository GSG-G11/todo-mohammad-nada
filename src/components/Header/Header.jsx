import Search from './Search';
import logo from '../../logo.svg';
import './Header.css';

export default function Header({ searchByTitle }) {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo_image" />
      <Search searchByTitle={searchByTitle} />
      <div className="user-info">
        <div className="img-profile"></div>
        <p>Nada</p>
      </div>
    </header>
  );
}
