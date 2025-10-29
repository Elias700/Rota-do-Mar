import BeachVideo from "../../assets/video-beach.mp4";
import { useMemo, useRef, useState } from "react";
import { beaches } from "../../data/beachesData";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const blurTimeout = useRef<number | null>(null);

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const suggestions = useMemo(() => {
    const q = normalize(query).trim();
    if (!q) return [] as typeof beaches;
    return beaches
      .filter((b) => normalize(b.name).includes(q))
      .slice(0, 8);
  }, [query]);

  const handleSelect = (id: number) => {
    setOpen(false);
    setQuery("");
    navigate(`/beaches/${id}`);
  };

  return (
    <main>
      <section id="home" className="relative w-full h-[100vh] overflow-hidden">
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

          <div className="relative w-full max-w-xl">
            <input
              className="bg-zinc-200 text-zinc-600 font-mono ring-1 w-full
            ring-zinc-400 focus:ring-2 focus:ring-[var(--color-primary-600)]
            outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50
            rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-blue-300"
              placeholder="Pesquise sua praia preferida"
              name="search"
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => {
                // delay to allow click on item
                blurTimeout.current = window.setTimeout(() => setOpen(false), 120);
              }}
            />

            {open && suggestions.length > 0 && (
              <ul
                className="absolute left-0 right-0 mt-2 max-h-64 overflow-auto rounded-xl bg-white text-left shadow-xl border border-zinc-200"
                onMouseDown={(e) => e.preventDefault()}
              >
                {suggestions.map((b) => (
                  <li
                    key={b.id}
                    className="px-3 py-2 cursor-pointer text-zinc-800 hover:bg-zinc-100"
                    onClick={() => handleSelect(b.id)}
                  >
                    {b.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
