import { useEffect, useState } from 'react'

import logoImg from './assets/logo-nlw-esports.svg'
import { Gamebanner } from './components/Gamebanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import './styles/main.css'

interface Game{
  id: string
  title: string
  bannerUrl: string
  _count:{
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(res => res.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return(
            <Gamebanner 
              key={game.id}
              bannerUrl={game.bannerUrl} 
              title={game.title} 
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>

      <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <CreateAdBanner />
      </div>
    </div>
  )
}

export default App
