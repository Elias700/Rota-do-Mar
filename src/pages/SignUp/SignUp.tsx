const SignUp = () => {
    return (
        <div className="h-[70vh] flex flex-col items-center justify-center bg-[var(--color-primary-100)]">
            <h1 className="text-center text-4xl p-10">Cadastro</h1>
            <form className="flex flex-col w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg bg-[var(--color-primary-50)]">
                <div className="flex flex-col gap-4">
                    
                    <label htmlFor=""> Nome
                    <input 
                        type="text" 
                        placeholder="Digite seu nome" 
                        className="border-1 p-2 rounded pla w-full"  
                        />
                    </label>

                    <label htmlFor=""> Email
                        <input 
                            type="email" 
                            placeholder="Digite seu email"
                            className="border-1 p-2 rounded w-full"
                            />
                    </label>
                    <label htmlFor=""> Senha
                        <input 
                            type="password" 
                            placeholder="Digite sua senha"
                            className="border-1 p-2 rounded w-full"
                            />
                    </label>
                    <label htmlFor=""> Confirmar
                        <input 
                            type="password" 
                            placeholder="Confrime sua senha"
                            className="border-1 p-2 rounded w-full"
                            />
                    </label>
                </div>
                <div className="flex flex-col items-center mt-8">
                    <button type="submit" 
                    className="bg-[var(--color-primary-600)] text-white p-2 rounded w-full hover:bg-[var(--color-primary-500)] transition duration-[500ms] cursor-pointer">Cadastrar</button>
                    <p className="">Já tem conta? <a href="" className="text-[var(--color-primary-600)] hover:underline">Acessar</a></p>
                </div>
            </form>
        </div>
    )
};

export default SignUp;