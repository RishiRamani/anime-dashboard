import type { OrderBy, SortBy } from "../types/anime"

type Searchbarprops = {
  query:string,
  setQuery:React.Dispatch<React.SetStateAction<string>>,
  sortBy:SortBy,
  setSortBy:React.Dispatch<React.SetStateAction<SortBy>>,
  orderBy:OrderBy,
  setOrderBy:React.Dispatch<React.SetStateAction<OrderBy>>,
}

export function Searchbar({query,setQuery,sortBy,setSortBy,orderBy,setOrderBy}:Searchbarprops){
  return(<>
  <div className="flex flex-col sm:flex-row justify-center items-center gap-5 p-12">
    <input className="border border-rounded flex-1 p-2" placeholder="Search..." value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
    {query!==""?
    <div className="flex flex-col sm:flex-row gap-5">
      <label>
        Order By:
        <select value={orderBy} onChange={(e)=>{setOrderBy(e.target.value as OrderBy)}}>
          <option value="" disabled>Select...</option>
          <option value="popularity">Popularity</option>
          <option value="score">Score</option>
          <option value="rank">Rank</option>
        </select>
      </label>
      <label>
        Sort Direction:
        <select value={sortBy} onChange={(e)=>{setSortBy(e.target.value as SortBy)}}>
          <option value="" disabled>Select...</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
    :<></>}
    
    
  </div>
  </>)
}