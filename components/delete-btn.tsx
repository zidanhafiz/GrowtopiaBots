'use client';

import { Dispatch, SetStateAction } from 'react';

type Props = {
  id: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

function DeleteBtn({ id, isLoading, setIsLoading }: Props) {
  const deleteAccount = async (id: string) => {
    if (window.confirm('Are you sure wanna delete this account?')) {
      setIsLoading(true);
      const res = await fetch(`/api/bots/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('error delete id');
      else {
        setIsLoading(false);
        return res.json();
      }
    }
  };

  return (
    <button
      className='py-2 px-3 mx-2 rounded bg-red-500 enabled:hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70'
      onClick={() => deleteAccount(id)}
      disabled={isLoading}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
