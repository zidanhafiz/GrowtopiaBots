import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mx-auto w-fit text-center'>
      <h2 className='text-2xl font-semibold my-6'>Page Not Found</h2>
      <p className='mb-4'>Could not find requested resource</p>
      <Link
        href='/'
        className='underline hover:no-underline'
      >
        Return Home
      </Link>
    </div>
  );
}
