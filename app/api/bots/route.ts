import { db } from '@/lib/firebase';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';

export async function GET() {
  try {
    const datas: Data[] = [];
    const querySnapshot = await getDocs(collection(db, 'bots'));
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
    await addDoc(collection(db, 'bots'), {
      growId,
      password,
      status: 'disconnect',
      ping: 0,
      world: '',
      created_at: serverTimestamp(),
    });
    return Response.json({ status: 201, message: 'success created new account' });
  } catch (e) {
    return Response.json({ status: 400, error: 'error' });
  }
}
