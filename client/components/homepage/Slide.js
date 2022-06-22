import SlideCube from "./CubeSlider";

export default function SlideInit() {
  return (
    <div className="bg-sfumed-1 min-h-[700px] md:min-h-screen relative py-[120px] flex items-center content-center">
      <div className="absolute right-0 max-w-full z-0 overflow-x-hidden">
        <canvas id="canvasOne" className="w-[1000px] md:w-[1400]" width="1400" height="1400">
          Your browser does not support HTML5 canvas.
        </canvas></div>
      <div className="container mx-auto h-full z-[1]">
        <div className="columns-2 flex h-full flex justify-center items-center">
          <div className="w-full h-full flex flex-col items-start justify-center	content-center">
            <h1 className="text-white mb-5 text-[40px] md:text-[70px]">Generiamo valore e consapevolezza</h1>
            <p className="text-white mb-5">
              Professionisti dedicati allo sviluppo delle imprese e del territorio.
            </p>
            <button className="button btn-light">Contattaci</button>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
