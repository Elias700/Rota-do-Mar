import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Logo from '../../assets/logo2-sem-fundo.png'
import backgroundImg from '../../assets/beache1.jpg'


const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen md:h-screen bg-[var(--color-primary-100)] relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 text-[var(--color-primary-50)] 
                    hover:underline font-medium cursor-pointer"
      >
        Voltar para Página principal
      </button>
      
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError(null);
          setSubmitting(true);
          try {
            await login({ email, password });
            navigate("/");
          } catch (err: any) {
            setError(err?.message || "Falha ao entrar");
          } finally {
            setSubmitting(false);
          }
        }}
        className="min-h-screen md:h-screen flex flex-col items-center 
                  justify-center gap-8 md:gap-10 bg-cover bg-center bg-no-repeat px-4"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <img 
            src={Logo} 
            alt="logo" 
            className="h-28 md:h-40"    
        />
        
        <div 
          className="flex items-center justify-center flex-col gap-5 bg-[var(--color-primary-50)] 
                    w-full max-w-xs sm:max-w-md md:max-w-lg p-6 md:p-8 rounded-lg shadow-lg 
                    bg-gradient-to-r 
                    from-[var(--color-primary-800)] 
                    to-[var(--color-primary-500)]"
        >
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-center text-[var(--color-primary-100)] text-3xl">Seja bem vindo</h1>

            <div className="relative"> 
              <input
                  className="peer h-10 w-full border-b-2 border-[var(--color-primary-300)] 
                            text-[var(--color-primary-100)] focus:outline-none focus:border-[var(--color-primary-400)]"
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" " 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <label
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-[var(--color-primary-300)] text-sm transition-all duration-300
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)]
                            peer-focus:text-sm"
              >
                Email
              </label>
            </div>

            <div className="relative "> 
              <input
                className="peer h-10 w-full border-b-2 border-[var(--color-primary-300)] text-[var(--color-primary-100)]
                          focus:outline-none focus:border-[var(--color-primary-400)]"
                id="password"
                name="password"
                type="password"
                placeholder="" 
                value={password}
                  onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <label
                htmlFor="senha" 
                className="absolute left-0 -top-3.5 text-[var(--color-primary-300)] text-sm transition-all duration-300
                          peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                          peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)]
                          peer-focus:text-sm"
              >
                Senha
              </label>
            </div>

           
          </div>

          <button
            type="submit"
            className="bg-[var(--color-primary-100)] hover:bg-[var(--color-primary-400)]
                      text-[var(--color-primary-600)] hover:text-[var(--color-primary-100)] 
                      p-2 mt-4 rounded w-full transition duration-150 cursor-pointer"
            disabled={submitting}
          >
            {submitting ? "Entrando..." : "Entrar"}
          </button>

          {error && (
            <p className="text-sm text-[var(--color-error)] text-center">{error}</p>
          )}

          <p className="text-sm text-[var(--color-primary-300)]">
            Não tem conta?
            <button
              onClick={() => navigate("/cadastro")}
              className="text-[var(--color-primary-100)] hover:underline font-medium ml-1 cursor-pointer"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
