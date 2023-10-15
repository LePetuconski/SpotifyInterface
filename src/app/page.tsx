import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Repeat, SkipForward, Repeat1, Laptop2, LayoutList, Maximize2, Mic2, Volume1 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col"> 
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Treino Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Coding Mode</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Soft Rock</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/treino.jpg" width={104} height={104} alt="Capa de um desenho de uma garota" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button> 
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/treino.jpg" width={104} height={104} alt="Capa de um desenho de uma garota" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button> 
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/treino.jpg" width={104} height={104} alt="Capa de um desenho de uma garota" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button> 
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/treino.jpg" width={104} height={104} alt="Capa de um desenho de uma garota" />
              <strong>Wasting Light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black" />
              </button> 
            </a>
            
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Letícia</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/treino.jpg" className="w-full" width={120} height={120} alt="Capa de um desenho de uma garota" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">neko, DJ Fronteo, Layto e mais</span>
            </a>

            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/treino.jpg" className="w-full" width={120} height={120} alt="Capa de um desenho de uma garota" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">neko, DJ Fronteo, Layto e mais</span>
            </a>

            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/treino.jpg" className="w-full" width={120} height={120} alt="Capa de um desenho de uma garota" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">neko, DJ Fronteo, Layto e mais</span>
            </a>

            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/treino.jpg" className="w-full" width={120} height={120} alt="Capa de um desenho de uma garota" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">neko, DJ Fronteo, Layto e mais</span>
            </a>

            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/treino.jpg" className="w-full" width={120} height={120} alt="Capa de um desenho de uma garota" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">neko, DJ Fronteo, Layto e mais</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="flex items-center justify-between border-t border-zinc-700 bg-zinc-800 px-6 py-4">
      <div className="flex items-center gap-3">
        <Image src="/treino.jpg" width={56} height={56} alt="Foto do álbum" />
        <div className="flex flex-col">
          <strong className="font-normal">Murder In My Mind</strong>
          <span className="text-xs text-zinc-400">Kordhell</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="cursor-pointer text-green-400 hover:text-green-600" size={20} />
          <SkipBack fill="rgb(228, 228, 231)" className="cursor-pointer hover:text-zinc-400" size={20} />
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 text-black">
            <Play fill="bg-black" />
          </button>
          <SkipForward fill="rgb(228, 228, 231)" className="text-zinc-200 hover:text-zinc-400" size={20} />
          <Repeat1 className="cursor-pointer text-zinc-200 hover:text-zinc-400" size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-10 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={18} />
      </div>
    </footer>
    </div>
  )
}

