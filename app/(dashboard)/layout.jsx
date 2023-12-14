import Sidebar from "../../components/Sidebar";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import Searchbar from "../../components/Searchbar";
import TopPlay from '../../components/TopPlay'



function Dashboardlayout({ children }) {

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar 
          flex xl:flex-row flex-col-reverse ">
          <div className="flex-1 h-fit pb-40">

             {children}
          </div>
          <div className="xl:sticky relative top-0 h-fit">
             <TopPlay/>
             
          </div>
        </div>
      </div>
      {/* reproductor de musica */}
      <MusicPlayer/>
    </div>
  );
}

export default Dashboardlayout;