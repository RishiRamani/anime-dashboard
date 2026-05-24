import type { Anime } from "../types/anime"

type Animemodalprops = {
  selectedAnime:Anime|null,
  setSelectedAnime:React.Dispatch<React.SetStateAction<Anime|null>>
}

export function Animemodal({selectedAnime,setSelectedAnime}:Animemodalprops){

  return(<>
    <div className="fixed inset-0 overflow-y-auto bg-black/70 p-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl p-6 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="text-4xl font-bold pb-10">{selectedAnime?.title}</div>
          <button className="bg-red-600 p-2 pl-3 pr-3 self-start " onClick={()=>{setSelectedAnime(null)}}>&#10005;</button>
        </div>
        
        <img className="w-50 aspect-2/3" src={selectedAnime?.images.jpg.image_url}/>
        <div className="text-3xl font-bold self-start pt-10">Synopsis:</div>
        <div>{selectedAnime?.synopsis}</div>
        <div>Status : {selectedAnime?.status}</div>
        <div>Duration : {selectedAnime?.duration}</div>
      </div>
    </div>
  </>)
}