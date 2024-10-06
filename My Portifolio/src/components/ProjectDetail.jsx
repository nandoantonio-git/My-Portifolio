import { useParams } from "react-router-dom"
import data from '../data/projects.json'

export default function ProjectDetail(){
    
    const { id } = useParams()

    const project = data.find((project) => project.id == id)
    return(
        <>
        {
            project ?
                <div >
                    
                    <h1 className='col-span-full text-5xl font-bold text-center'>{project.titulo}</h1>
                    <div className=" flex content-start place-items-center overflow-x-scroll rounded-lg p-6 h-screen" key={project.id}>
                        <figure className="relative w-full">
                            <img className="object-cover object-center w-full h-full rounded-xl"
                            src={`/${project.imagem_destaque}`} 
                            alt={project.titulo}/>
                            <figcaption className="absolute md:bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-xl shadow-blue-gray-900/50 saturate-200 backdrop-blur-sm ">
                            <div>
                                <h5 className="text-xl font-medium text-slate-800">
                                {project.detalhamento}
                                </h5>
                            </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            : <p>Filme não encontrado</p>
        }
        </>
    )
}