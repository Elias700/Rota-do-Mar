import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.png"; 

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-[var(--color-primary-600)] relative flex justify-between items-center px-4 py-2 shadow-2xl">
        <img 
          src={Logo} alt="Logo Rota do Mar" 
          className="h-20" 
        />

        <nav className="hidden md:flex">
          <ul className="flex gap-10">
            <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
              <Link 
                to="/#home" 
                className="relative z-10"
              >
                Home
              </Link>
              <span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5
                bg-[var(--color-primary-50)] group-hover:w-full"
              >
              </span>
            </li>

            <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
              <Link 
                to="/#praias" 
                className="relative z-10"
              >
                Praias
              </Link>
              <span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5
                bg-[var(--color-primary-50)] group-hover:w-full"
                >
                </span>
            </li>

            <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
              <Link 
                to="/#tempo" 
                className="relative z-10"
              >
                Previsão do Tempo
              </Link>
              <span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5
                bg-[var(--color-primary-50)] group-hover:w-full"
              ></span>
            </li>

            <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
              <Link 
                to="/#mapa" 
                className="relative z-10"
              >
                Mapa
              </Link>
              <span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5
                bg-[var(--color-primary-50)] group-hover:w-full"
              ></span>
            </li>

            <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
              <Link 
                to="/#contato" 
                className="relative z-10"
              >
                Contato
              </Link>
              <span
                className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5
                bg-[var(--color-primary-50)] group-hover:w-full"
              ></span>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex gap-5">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer px-12 py-3 rounded-xl border-[1px] border-[var(--color-primary-50)] 
            text-[var(--color-primary-50)] font-medium group shadow-md transition-colors hover:bg-[var(--color-primary-700)]"
          >
            <div className="relative overflow-hidden">
              <p
                className="group-hover:-translate-y-7 duration-[1.125s] 
                ease-[cubic-bezier(0.19,1,0.22,1)] text-[var(--color-primary-50)]"
              >
                Login
              </p>
              <p
                className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] 
                ease-[cubic-bezier(0.19,1,0.22,1)] text-[var(--color-primary-50)]"
              >
                Login
              </p>
            </div>
          </button>

          <button
            onClick={() => navigate("/cadastro")}
            className="cursor-pointer px-12 py-3 rounded-xl border-[1px] border-[var(--color-primary-50)] 
            text-[var(--color-primary-50)] font-medium group shadow-md transition-colors hover:bg-[var(--color-primary-700)]"
          >
            <div className="relative overflow-hidden">
              <p
                className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                Cadastro
              </p>
              <p
                className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] 
                ease-[cubic-bezier(0.19,1,0.22,1)] text-[var(--color-primary-50)]"
              >
                Cadastro
              </p>
            </div>
          </button>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[var(--color-primary-50)]
           hover:bg-[var(--color-primary-800)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-50)]"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 
                10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 
                10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}>
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
            </svg>
          )}
        </button>

        {open && (
          <div 
            className="absolute left-0 right-0 top-full md:hidden 
            shadow-2xl border-t border-[var(--color-primary-500)]"
          >
            <nav className="px-4 py-3 bg-[var(--color-primary-500)]">
              <ul className="flex flex-col gap-4">
                <li className="text-[var(--color-primary-50)] text-xl">
                  <Link 
                    to="/#home" 
                    onClick={() => setOpen(false)}>
                      Home
                  </Link>
                </li>
                <li className="text-[var(--color-primary-50)] text-xl">
                  <Link 
                    to="/#praias" 
                    onClick={() => setOpen(false)}>
                      Praias
                  </Link>
                </li>
                <li className="text-[var(--color-primary-50)] text-xl">
                  <Link 
                    to="/#tempo" 
                    onClick={() => setOpen(false)}>
                      Previsão do Tempo
                  </Link>
                </li>
                <li className="text-[var(--color-primary-50)] text-xl">
                  <Link 
                    to="/#mapa" 
                    onClick={() => setOpen(false)}>
                      Mapa
                  </Link>
                </li>
                <li className="text-[var(--color-primary-50)] text-xl">
                  <Link 
                    to="/#contato" 
                    onClick={() => setOpen(false)}>
                      Contato
                  </Link>
                </li>
              </ul>

              <div className="mt-4 flex flex-col gap-3">
                <button
                  onClick={() => { setOpen(false); navigate("/login"); }}
                  className="px-4 py-3 rounded-xl border border-[var(--color-primary-50)] text-[var(--color-primary-50)]
                  font-medium shadow-md hover:bg-[var(--color-primary-600)]"
                >
                  Login
                </button>
                <button
                  onClick={() => { setOpen(false); navigate("/cadastro"); }}
                  className="px-4 py-3 rounded-xl border border-[var(--color-primary-50)] text-[var(--color-primary-50)] 
                  font-medium shadow-md hover:bg-[var(--color-primary-600)]"
                >
                  Cadastro
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
