const SignIn = () => {
    return (
        <form className="h-[100vh]">
            <h1 className="text-center text-4xl p-5">Login</h1>
            <div className="flex items-center justify-center flex-col gap-3 h-[50vh] bg-blue-300 mx-180">
                <div className="flex flex-col gap-3">
                    <label htmlFor="" className=""> Email
                        <input type="email" placeholder="Digite seu email" className="border-2"/>
                    </label>
                    <label htmlFor=""> Senha
                        <input type="passworf" placeholder="Digite sua senha" className="border-2"/>
                    </label>
                </div>
                <p>Não tem conta?<a href="/cadastro">Cadastre-se</a></p>
                <button>Entrar</button>
            </div>
            
        </form>
    )
};

export default SignIn;

//login