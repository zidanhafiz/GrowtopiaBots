import { db } from '@/lib/firebase';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    const docSnap = await getDoc(doc(db, 'bots', id));
    return Response.json({ status: 200, data: docSnap.data() }).status;
  } catch (e) {
    return Response.json({ status: 400, message: 'Error get data' }).status;
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  try {
    await deleteDoc(doc(db, 'bots', id));
    return Response.json({ status: 200, message: 'delete success' }).status;
  } catch (e) {
    return Response.json({ status: 400, error: 'error delete' }).status;
  }
}
