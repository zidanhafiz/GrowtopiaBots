'use client';
import CreateAccount from '@/components/create-account';
import DeleteBtn from '@/components/delete-btn';
import WarpBtn from '@/components/warp-btn';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<GrowAccount[]>([]);
  useEffect(() => {
    fetch('/api/bots')
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <main className='mx-5 lg:mx-[10%]'>
      <h1 className='text-2xl font-semibold text-center mt-10 mb-6'>
        Create Growtopia Account
      </h1>
      <hr />
      <div>
        <CreateAccount />
      </div>
      <div className='w-full'>
        <table className='table-auto w-full'>
          <thead className=' bg-slate-700'>
            <tr className='h-16'>
              <th>#</th>
              <th>growID</th>
              <th>Password</th>
              <th>Status</th>
              <th>World</th>
              <th>Ping</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((d: GrowAccount, i: number) => (
                <tr
                  key={d.id}
                  className='border border-slate-700 text-center h-12'
                >
                  <td className='border border-slate-700'>{i + 1}</td>
                  <td className='border border-slate-700'>{d.growId}</td>
                  <td className='border border-slate-700'>{d.password}</td>
                  <td className='border border-slate-700'>{d.status}</td>
                  <td className='border border-slate-700'>{d.world}</td>
                  <td className='border border-slate-700'>{d.ping}</td>
                  <td className='border border-slate-700'>
                    <WarpBtn id={d.id} />
                    <DeleteBtn id={d.id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
