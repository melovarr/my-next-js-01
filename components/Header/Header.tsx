import css from './Header.module.css';
import Link from 'next/link';
import { getCategories } from '../../lib/api';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';

const Header = async () => {
  const categories = await getCategories();

  // const handleClick = () => {
  //   // ...
  // };
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      {/* <h2>NoteHub</h2> */}
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <CategoriesMenu categories={categories} />
            {/* <button onClick={handleClick}>Open menu</button> */}
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
