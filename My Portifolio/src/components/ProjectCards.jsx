import { Link } from "react-router-dom";

export default function ProjectCards({id, titulo, imagem_destaque,descricao}){

    return(
        <>
            <div key={id} className="relative flex flex-col justify-center items-center my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-22">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={`/${imagem_destaque}`} alt={titulo} className="w-100 h-106 mt-3 auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                    {titulo}
                    </h6>
                    <p className="text-slate-600 leading-normal font-light">
                    {descricao}
                    </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                    <Link className="py-2 px-3 transition ease-in-out duration-300 bg-purple-800 hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl" to={`/projects/${id}`}>Ver detalhes</Link>
                </div>
            </div>  
        </>
    )

}