import type { Anime, Pagination } from "../types/anime"

type Animegridprops = {
  anime:Anime[],
  setPage:React.Dispatch<React.SetStateAction<number>>,
  pagination:Pagination|null,
  page:number,
  setSelectedAnime:React.Dispatch<React.SetStateAction<Anime|null>>
}

export function Animegrid({anime,setPage,pagination,page,setSelectedAnime}:Animegridprops){
  return(<>
  {anime.length>0?
  <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {anime.map((item,index)=>{
        return (<div onClick={()=>{setSelectedAnime(item)}} className="w-full mx-auto max-w-62.5 flex flex-col gap-2" key={`${item.mal_id}-${index}`}>
          <img className="w-full aspect-2/3" loading="lazy" src={item.images.jpg.image_url} alt={item.title}/>
          <p>{item.title}</p>
          <div className="gap-1">
            <div>MAL Rating : {item.score?item.score:"NOT RATED"}/10</div>
            <div>Episodes : {item.episodes?item.episodes:"TBA"}</div>
          </div>
        </div>);
      })}
      
    </div>
    <div className="flex flex-col items-center justify-center gap-3">
        <div>Page {pagination?.current_page} of {pagination?.last_visible_page}</div>
        <div className="flex justify-center gap-10">
          <button onClick={()=>{
            if(page===1){
              return;
            }else{
              setPage((prev)=>{return prev-1});
            }
          }}>&lt;</button>
          <button onClick={()=>{
            if(pagination?.has_next_page){
              setPage((prev)=>{return prev+1});
            }else{
              return;
            }
          }}>&gt;</button>
        </div>
        
    </div>
  </div>:
  <div className="flex justify-center">
    <div className="text-2xl font-bold">No results...Try another Search</div>
  </div>
  }
  
  
  
  </>)
}