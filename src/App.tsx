import { useEffect, useState } from 'react'
import './App.css'
import { fetchTopAnime } from './services/anime';
import { type OrderBy, type Anime, type Pagination, type SortBy } from './types/anime';
import { Animegrid } from './components/Animegrid';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { Searchbar } from './components/Searchbar';
import { Animemodal } from './components/Animemodal';

function App() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error,setError] = useState<string|null>(null);
  const [query,setQuery] = useState<string>("");
  const [page,setPage] = useState<number>(1);
  const [pagination,setPagination] = useState<Pagination|null>(null);
  const [debouncedQuery,setDebouncedQuery] = useState("");
  const [sortBy,setSortBy] = useState<SortBy>("asc");
  const [orderBy,setOrderBy] = useState<OrderBy>("popularity");
  const [selectedAnime,setSelectedAnime] = useState<Anime|null>(null);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebouncedQuery(query);
    },500);

    return ()=>{
      clearTimeout(timer);
    }
  },[query])

  useEffect(()=>{
    async function loadAnime(){
      setError(null)
      try{
        const data = await fetchTopAnime(query,page,sortBy,orderBy);
        setAnime(data.data);
        setPagination(data.pagination);
      }catch(error){
        setError("Failed to fetch anime");
      }finally{
        setLoading(false);
      }
    }
    loadAnime();
  },[debouncedQuery,page,sortBy,orderBy])

  useEffect(()=>{
    setPage(1)
  },[sortBy,query])
  return (
    <>
      <div className='flex flex-col gap-8'>
        {loading && <Loading/>}
        {!loading &&  <Searchbar orderBy={orderBy} setOrderBy={setOrderBy} sortBy={sortBy} setSortBy={setSortBy} query={query} setQuery={setQuery}/>}
        <div className={`transition-opacity duration-300 ${
          loading? "opacity-50" : "opacity-100"
        }`}>
          {!loading && !error &&  <Animegrid setSelectedAnime={setSelectedAnime} page={page} pagination={pagination} setPage={setPage} anime={anime}/>}
        </div>
        {error && !loading && <Error error={error}/>}
        {selectedAnime && <Animemodal selectedAnime={selectedAnime} setSelectedAnime={setSelectedAnime}/>}
      </div>
      
    </>
  )
}

export default App