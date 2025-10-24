
const Contact = () => {

    return (
        <form className="h-[100vh] flex flex-col items-center justify-center bg-[var(--color-light)]">
                <h1 className="text-center text-4xl text-[var(--color-primary-700)] font-bold p-10">Contato</h1>
                <div className="flex flex-col w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg bg-[var(--color-primary-50)]">
                    <div className="flex flex-col gap-4">
                        <label>
                            <span className="font-medium text-[var(--color-primary-700)]">Nome</span> 
                            <input 
                                type="text" 
                                placeholder="Digite seu nome" 
                                className="border-2 border-[var(--color-primary-700)] p-2 rounded pla w-full" 
                                required
                            />
                        </label>

                        <label> 
                            <span className="font-medium text-[var(--color-primary-700)]">Email</span> 
                            <input 
                                type="email" 
                                placeholder="Digite seu email"
                                className="border-2 border-[var(--color-primary-700)] p-2 rounded w-full"
                                required
                            />
                        </label>

                        <label>
                            <span className="font-medium text-[var(--color-primary-700)]">Celular</span> 
                            <input 
                                    type="tel" 
                                    placeholder="Digite seu celular"
                                    className="border-2 border-[var(--color-primary-700)] p-2 rounded w-full"
                                    required
                                />
                        </label>

                        <label> 
                            <span className="font-medium text-[var(--color-primary-700)]">Mensagem</span> 
                            <textarea
                                name="mensagem" 
                                id="mensagem" 
                                rows="4" 
                                placeholder="Digite sua mensagem" 
                                className="border-2 border-[var(--color-primary-700)] p-2 rounded w-full" 
                                required
                            >
                            </textarea>
                        </label>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <button 
                            type="submit" 
                            className="bg-[var(--color-primary-600)] text-[var(--color-primary-50)] p-2 rounded w-full
                            hover:bg-[var(--color-primary-500)] transition duration-[500ms] font-bold cursor-pointer"
                        >
                            Enviar mensagem
                        </button>
                    </div>
                </div>
        </form>
    )
};

export default Contact;