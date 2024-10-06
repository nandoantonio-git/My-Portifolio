import { useState } from 'react';
import projects from '../data/projects.json';
import ProjectCards from '../components/ProjectCards';



export default function Projects() {

  const [search, setSearch] = useState('');


  const filmesFiltrados = projects.filter(movie => (movie.titulo.toLowerCase().includes(search.toLowerCase())));



  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className='flex-grow grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] justify-items-center content-evenly gap-x-4 px-10'>
          <h1 className='col-span-full text-5xl sm:mb-4 font-bold text-center'>Projetos</h1>
          <form className='col-span-full w-full flex flex-col justify-center items-center'>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Pesquise um filme...'
              className='w-2/6 text-black p-2 mb-5 border border-gray-300 rounded-md'
            />
          </form>
          {filmesFiltrados.length > 0 ? (
            filmesFiltrados.map((movie) => (
              <ProjectCards key={movie.id} {...movie} />
            ))
          ) : (
            <p>Filme não encontrado</p>
          )}
        </main>
    
      </div>
    </>
  );
  
}