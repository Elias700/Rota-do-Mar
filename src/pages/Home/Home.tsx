import BeachVideo from "../../assets/video-beach.mp4";

function Header() {
  return (
    <header>
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
            O PraiaFácil é o seu guia digital para descobrir e aproveitar as
            melhores praias da sua cidade. Aqui, você encontra informações
            completas sobre cada praia.
          </p>
          <input
            type="text"
            placeholder="Pesquise sua praia preferida"
            className="px-4 py-2 rounded-lg w-100 border-1"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
