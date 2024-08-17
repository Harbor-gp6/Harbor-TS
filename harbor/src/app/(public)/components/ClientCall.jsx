import { Button } from "flowbite-react";
import { ArrowRight } from "lucide-react";

export function ClientCall() {
  return (
    <>
      <div className="">
        <div className="text-white bg-chamada bg-contain bg-center bg-no-repeat drop-shadow-[10px_8px_12px_rgba(0,0,255,0.25)] flex flex-col h-2/3 ml-44 mr-44 justify-center items-center gap-10">
          <div className="gap-5 flex flex-col">
            <p className="font-bold text-5xl">
                Deixe de adiar o seu sucesso.
            </p>
            <p className="text-center text-xl">
                Cadastre-se agora e comece a faturar mais já nesta semana!
            </p>
          </div>
          <div>
            <Button pill color="light">
              Comece a faturar agora
              <ArrowRight className="rounded-full bg-blueEnd ml-4 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
