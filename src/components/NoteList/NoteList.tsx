import { Note } from '@/lib/api';
import NoteItem from '@/components/NoteItem/NoteItem';

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
};

export default NoteList;
