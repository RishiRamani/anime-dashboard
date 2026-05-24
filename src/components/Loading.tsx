
export function Loading(){
  return(<>
    <div className="flex items-center justify-center min-h-screen gap-4">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      <div className="text-2xl font-semibold">Loading anime...</div>
    </div>
  </>)
}