// @next
import dynamic from 'next/dynamic';

// @project
const Crypto = dynamic(() => import('@/views/landings/crypto'));

/***************************  PAGE - CRYPTO  ***************************/

export default function CryptoPage() {
  return <Crypto />;
}
