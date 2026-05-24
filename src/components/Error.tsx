type Errorprops = {
  error:string|null
}

export function Error({error}:Errorprops){
  return(<>
  <div className="bg-red-500 bg-opacity-25">
    <p className="text-2xl font-bold">ERROR</p>
    <p>{error}</p>
  </div>
  </>)
}