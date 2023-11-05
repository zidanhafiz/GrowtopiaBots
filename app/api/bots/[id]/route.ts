import { db } from '@/lib/firebase';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log(id);
  try {
    const docSnap = await getDoc(doc(db, 'bot', id));
    return Response.json({ status: 200, data: docSnap.data() });
  } catch (e) {
    return Response.json({ status: 400, message: 'Error get data' });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log(id);
  try {
    await deleteDoc(doc(db, 'bot', id));
    return Response.json({ status: 200, message: 'delete success' });
  } catch (e) {
    return Response.json({ status: 400, error: 'error delete' });
  }
}