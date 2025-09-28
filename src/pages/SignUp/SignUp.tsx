import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    return (
        <div className="h-screen bg-[var(--color-primary-100)] relative">
            <button
            onClick={() => navigate("/")}
            className="absolute top-5 left-5 text-[var(--color-primary-600)] hover:underline font-medium cursor-pointer"
            >
            Voltar para Página principal
            </button>

            <form className="h-[100vh] flex flex-col items-center justify-center bg-[var(--color-primary-100)]">
                <h1 className="text-center text-4xl p-10">Cadastro</h1>
                <div className="flex flex-col w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg bg-[var(--color-primary-50)]">
                    <div className="flex flex-col gap-4">
                        
                        <label htmlFor="">
                            <span className="font-medium">Nome</span> 
                        <input 
                            type="text" 
                            placeholder="Digite seu nome" 
                            className="border-1 p-2 rounded pla w-full"  
                            />
                        </label>

                        <label htmlFor=""> 
                            <span className="font-medium">Email</span> 
                            <input 
                                type="email" 
                                placeholder="Digite seu email"
                                className="border-1 p-2 rounded w-full"
                                />
                        </label>

                        <label htmlFor="">
                            <span className="font-medium">Senha</span>  
                            <input 
                                type="password" 
                                placeholder="Digite sua senha"
                                className="border-1 p-2 rounded w-full"
                                />
                        </label>

                        <label htmlFor=""> 
                            <span className="font-medium">Confirme</span> 
                            <input 
                                type="password" 
                                placeholder="Confirme sua senha"
                                className="border-1 p-2 rounded w-full"
                                />
                        </label>
                    </div>
                    <div className="flex flex-col items-center mt-8">

                        <button type="submit" 
                        className="bg-[var(--color-primary-600)] text-white p-2 rounded w-full hover:bg-[var(--color-primary-500)] transition duration-[500ms] cursor-pointer">Cadastrar</button>

                        <p className="p-3">Já tem conta?
                            <button 
                                onClick={() => navigate("/login")} 
                                className="text-[var(--color-primary-600)] hover:underline font-medium ml-1 cursor-pointer"
                            >
                                Acessar
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default SignUp;