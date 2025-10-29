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
        className="absolute top-5 left-5 text-[var(--color-primary-50)] hover:underline font-medium cursor-pointer"
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
        className="min-h-screen md:h-screen flex flex-col items-center justify-center gap-8 md:gap-10 bg-cover bg-center bg-no-repeat px-4"
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
          w-full max-w-xs sm:max-w-md md:max-w-lg p-6 md:p-8 rounded-lg shadow-lg"
          >
          <div className="flex flex-col gap-4 w-full">
            <label 
              htmlFor="email" 
              className="flex flex-col gap-1"
            >
              <span className="font-medium">Email</span>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-1 p-2 rounded w-full "
                required
              />
            </label>

            <label 
              htmlFor="senha" 
              className="flex flex-col gap-1"
            >
              <span className="font-medium">Senha</span>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-1 p-2 rounded w-full"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)]
            text-white p-2 rounded w-full transition duration-150 cursor-pointer"
            disabled={submitting}
          >
            {submitting ? "Entrando..." : "Entrar"}
          </button>

          {error && (
            <p className="text-sm text-[var(--color-error)] text-center">{error}</p>
          )}

          <p className="text-sm">
            Não tem conta?
            <button
              onClick={() => navigate("/cadastro")}
              className="text-[var(--color-primary-600)] hover:underline font-medium ml-1 cursor-pointer"
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
