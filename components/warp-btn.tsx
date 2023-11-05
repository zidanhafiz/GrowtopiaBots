'use client';

function WarpBtn({ id }: { id: string }) {
  const btnHandle = async (id: string) => {
    const res = await fetch(`/api/bots/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('error delete id');
    return res.json();
  };

  return (
    <button
      className='py-2 px-3 mx-2 rounded bg-slate-700 enabled:hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed'
      onClick={() => btnHandle(id)}
      disabled
    >
      Warp
    </button>
  );
}

export default WarpBtn;
