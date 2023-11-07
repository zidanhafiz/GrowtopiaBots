'use client';

import { FormEvent, useState } from 'react';

function CreateAccount() {
  const [growId, setGrowId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch('/api/bots', {
      method: 'POST',
      body: JSON.stringify({ growId, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        setGrowId('');
        setPassword('');
        setIsLoading(false);
        res;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setGrowId('');
        setPassword('');
      });
  };

  return (
    <form
      onSubmit={formSubmit}
      className='my-6 flex md:flex-row flex-col gap-5 justify-center'
    >
      <input
        className='bg-gray-900 py-2 px-3 focus:outline-none'
        type='text'
        placeholder='growID'
        value={growId}
        onChange={(e) => setGrowId(e.target.value)}
        pattern='^\S+$'
        title='space is not required!'
        required
        minLength={5}
        maxLength={20}
      />
      <input
        className='bg-gray-900 py-2 px-3 focus:outline-none'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        pattern='^\S+$'
        title='space is not required!'
        required
        minLength={8}
        maxLength={20}
      />
      <button
        type='submit'
        className='bg-slate-700 px-3 py-2 enabled:hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70'
        disabled={isLoading}
      >
        Create Account
      </button>
    </form>
  );
}

export default CreateAccount;
