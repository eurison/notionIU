import { Editor } from "./componets/Editor";

export function App() {
  return(
    
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-green-300 to-purple-400">
      <div className="bg-white w-[1600px] mx-auto rounded-xl min-h-[700px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400 bg-red-400"/>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400 bg-yellow-400"/>
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400 bg-green-400"/>
          </div>
        </aside>
        <main className="p-4">
            <Editor/>
        </main>
      </div>
    </div>
    )
}
