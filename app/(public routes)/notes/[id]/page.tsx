import { getSingleNote } from '../../../../lib/api';
import NoteDetailsClient from './NoteDetails.client';
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from '@tanstack/react-query';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );

  // const formattedDate = note.updatedAt
  //   ? `Updated at: ${note.updatedAt}`
  //   : `Created at: ${note.createdAt}`;

  // return (
  //   <div>
  //     <h2>{note.title}</h2>
  //     <p>{note.content}</p>
  //     <button>Edit</button>
  //     <p>{formattedDate}</p>
  //   </div>
  // );
};

export default NoteDetails;
