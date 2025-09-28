import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[var(--color-primary-100)] relative">
      {/* Voltar para página principal no canto superior esquerdo */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 text-[var(--color-primary-600)] hover:underline font-medium cursor-pointer"
      >
        Voltar para Página principal
      </button>

      {/* Formulário centralizado */}
      <form className="h-full flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl p-10">Login</h1>

        <div className="flex items-center justify-center flex-col gap-5 bg-[var(--color-primary-50)] w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4 w-full">
            <label htmlFor="email" className="flex flex-col gap-1">
              <span className="font-medium">Email</span>
              <input
                id="email"
                type="email"
                placeholder="Digite seu email"
                className="border-1 p-2 rounded w-full "
              />
            </label>

            <label htmlFor="senha" className="flex flex-col gap-1">
              <span className="font-medium">Senha</span>
              <input
                id="senha"
                type="password"
                placeholder="Digite sua senha"
                className="border-1 p-2 rounded w-full"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-500)] text-white p-2 rounded w-full transition duration-150 cursor-pointer"
          >
            Entrar
          </button>

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
