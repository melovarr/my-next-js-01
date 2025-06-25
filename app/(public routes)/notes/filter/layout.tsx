import Link from 'next/link';
import { getCategories } from '../../../../lib/api';

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {categories.map(category => (
        <li key={category.id}>
          <Link href={`/notes/filter/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;

// type Props = {
//   children: React.ReactNode;
//   sidebar: React.ReactNode;
// };

// const NotesLayout = ({ children, sidebar }: Props) => {
//   return (
//     <section>
//       <aside>{sidebar}</aside>
//       <div>{children}</div>
//     </section>
//   );
// };

// export default NotesLayout;
