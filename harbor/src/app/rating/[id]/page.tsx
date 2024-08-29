import axios from "axios";
import { RatingCard } from "./components/RatingCard";
import { PrestadorListagemDto } from "@/types/prestador/PrestadorListagemDto";

type RatingProps = {
    params: {
        id: string
    }
}

export default function Rating() {
    const prestadores: PrestadorListagemDto[] = [1, 2, 3] as any
    return (
        <div className="flex flex-row justify-center gap-20">
            {/* <img src="/images/graphs/grafismos.svg" alt="Grafismos" className='absolute top-0 z-1' /> */}
            {
                Array.from(
                {length: prestadores.length}, (_, i) => 
                <RatingCard key={i} prestadorId={prestadores[i].id} nomePrestador={"Jarbas"} />)
            }
        </div>
    )
}