import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = dynamic(() => import('../components/HomePage'), {
  ssr: false,
});

export default function Page() {
  return <HomePage />;
}
