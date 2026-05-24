export interface Anime{
  mal_id:number;
  title:string;
  score:number;
  episodes:number;
  synopsis:string;
  background:string;
  duration:string;
  status:string;

  images:
  {
    jpg:
    {
      image_url: string;
    }
  }
}

export interface TopAnimeResponse{
  data:Anime[];
  pagination:Pagination
}

export type SortBy = "asc" | "desc";

export type OrderBy = "score" | "popularity" | "rank";

export interface Pagination{
  current_page: number,
  has_next_page:Boolean,
  last_visible_page:number,
}