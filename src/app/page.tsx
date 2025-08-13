import Silk from '@/components/Silk';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBehanceSquare,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

export default function Home() {
  const links = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vinihebert/',
    },
    {
      icon: <FaBehanceSquare />,
      label: 'Behance',
      url: 'https://www.behance.net/vinihebert',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      url: 'https://wa.me/5584988994447?text=Fala%20Vini!%20Dei%20uma%20olhada%20nas%20suas%20produ%C3%A7%C3%B5es%20e%20tenho%20interesse%20no%20seu%20trampo%20🚀',
    },
    {
      icon: <FaYoutube />,
      label: 'YouTube',
      url: 'https://youtube.com',
    },
  ];
  return (
    <>
      <div className="fixed inset-0 w-full min-h-screen z-0">
        <Silk scale={2} speed={3} color="#3c393d" noiseIntensity={1.2} />
      </div>

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center gap-10 p-4 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full">
          <Image
            src="https://github.com/shadcn.png"
            alt="shadcn"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl font-bold mt-4 text-white drop-shadow-lg">
              VINI HEBERT
            </h1>
            <p className="text-gray-200 drop-shadow-md">
              Designer & Videomaker
            </p>
          </div>
        </div>

        <div className="mt-10 w-full max-w-xs space-y-4">
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className="block p-[1px] rounded-lg bg-gradient-to-r from-yellow-400 from-70% to-red-600"
            >
              <div className="bg-black/95 hover:bg-zinc-900 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-lg transform text-center flex items-center justify-center gap-2">
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
