const SignIn = () => {
    return (
        
        <form className="h-screen flex flex-col items-center justify-center">
            <h1 className="text-center text-4xl p-5">Login</h1>
            <div className="flex items-center justify-center flex-col gap-5 bg-blue-300 w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg">
                <div className="flex flex-col gap-4 w-full"> 
            
                    <label htmlFor="email" className="flex flex-col gap-1"> 
                        <span className="font-medium">Email</span>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="Digite seu email" 
                            className="border-2 p-2 rounded w-full" 
                        />
                    </label>
                    
                    <label htmlFor="senha" className="flex flex-col gap-1"> 
                        <span className="font-medium">Senha</span>
                        <input 
                            id="senha"
                            type="password" 
                            placeholder="Digite sua senha" 
                            className="border-2 p-2 rounded w-full"
                        />
                    </label>
                </div>
                
                <p className="text-sm">
                    Não tem conta?
                    <a href="/cadastro" className="text-blue-700 hover:text-blue-900 font-medium ml-1">
                        Cadastre-se
                    </a>
                </p>
                
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-150 cursor-pointer"
                >
                    Entrar
                </button>
            </div>
            
        </form>
    )
};

export default SignIn;