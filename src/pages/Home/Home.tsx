import BeachVideo from "../../assets/video-beach.mp4";

function Home() {
  return (
    <div>
      <div className="relative w-full h-[85vh] overflow-hidden">
        <video
          src={BeachVideo}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          Seu navegador não suporta a tag de vídeo.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 bg-black/40">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Rota do Mar</h1>
          <p className="max-w-2xl mb-6">
            O Rota do Mar é o seu guia digital para descobrir e aproveitar as
            melhores praias da sua cidade. Aqui, você encontra informações
            completas sobre cada praia.
          </p>
          <input
            className="bg-zinc-200 text-zinc-600 font-mono ring-1 w-100 ring-zinc-400 focus:ring-2 focus:ring-[var(--color-primary-600)] outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-blue-300"
            placeholder="Pesquise sua praia preferida"
            name="text"
            type="text"
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
