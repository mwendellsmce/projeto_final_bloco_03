import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="w-full bg-indigo-900 text-white flex flex-col items-center py-6 mt-auto">
      <p className="font-bold text-sm">Pharmacia Generation | Copyright: 2026</p>
      <p className="text-xs mb-3 mt-1">Acesse nossas Redes Sociais</p>
      
      <div className="flex gap-4">
        <LinkedinLogo size={24} weight="bold" className="cursor-pointer hover:text-blue-300 transition-colors" />
        <InstagramLogo size={24} weight="bold" className="cursor-pointer hover:text-blue-300 transition-colors" />
        <FacebookLogo size={24} weight="bold" className="cursor-pointer hover:text-blue-300 transition-colors" />
      </div>
    </footer>
  );
}

export default Footer;