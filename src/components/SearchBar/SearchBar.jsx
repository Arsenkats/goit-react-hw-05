import css from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = ({ setSearchValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchValue.value.trim();
    setSearchValue(inputValue);
    e.target.reset();
  };

  return (
    <header className={css.headerStyles}>
      <form className={css.formStyle} onSubmit={handleSubmit}>
        <input
          type='text'
          autoComplete='off'
          name='searchValue'
          autoFocus
          placeholder='Search images and photos'
          className={css.input}
        />
        <button type='submit' className={css.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
};

export default Header;
