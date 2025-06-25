// 1. Імпортуємо функцію
import { getNotes } from '../../../lib/api';
import NoteList from '../../../components/NoteList/NoteList';

// 2. Робимо фукнцію асинхронною
const Notes = async () => {
  // 3. Виконуємо запит
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
};

export default Notes;
