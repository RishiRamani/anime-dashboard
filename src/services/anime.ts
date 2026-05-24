import type { OrderBy, SortBy, TopAnimeResponse } from "../types/anime";

const BASE_URL= import.meta.env.VITE_BASE_API_URL;
if(!BASE_URL){
  throw new Error("VITE_BASE_API_URL is missing");
}

export async function fetchTopAnime(query:string,page:number,sortBy:SortBy,orderBy:OrderBy):Promise<TopAnimeResponse>{
  let response;
  if(query===""){
    response = await fetch(`${BASE_URL}/top/anime?page=${page}`);
  }else{
    response = await fetch(`${BASE_URL}/anime?q=${query}&page=${page}&order_by=${orderBy}&sort=${sortBy}`);
  }
  

  if(!response.ok){
    throw new Error("Failed to fetch anime")
  }

  const data = await response.json();

  return data;
}