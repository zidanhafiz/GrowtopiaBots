import { db } from '@/lib/firebase';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

export async function GET() {
  try {
    const datas: Data[] = [];
    const querySnapshot = await getDocs(collection(db, 'bot'));
    querySnapshot.forEach((doc) => {
      const item = { id: doc.id, ...doc.data() };
      datas.push(item);
    });
    return Response.json({ status: 200, data: datas });
  } catch (e) {
    return Response.json({ status: 400, message: 'Error get data' });
  }
}

export async function POST(request: Request) {
  const { growId, password } = await request.json();
  try {
    await addDoc(collection(db, 'bot'), {
      growId,
      password,
      status: 'Disconnect',
      ping: 0,
      world: '',
      created_at: serverTimestamp(),
    });
    return Response.json({ status: 200, message: 'success' });
  } catch (e) {
    return Response.json({ status: 400, error: 'error' });
  }
}
