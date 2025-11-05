const Contact = () => {

    return (
        <form 
            id="contato" 
            className="h-[100vh] flex flex-col items-center justify-center bg-[var(--color-light)]"
        >
                <h1 className="text-center text-5xl text-[var(--color-primary-700)]  p-10">Contato</h1>
                <div className="flex flex-col w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg bg-[var(--color-primary-50)]">
                    <div className="flex flex-col gap-4">
                        <div className="relative"> 
                            <input
                                className="peer h-10 w-full border-b-2 border-[var(--color-primary-600)] 
                                            text-[var(--color-primary-800)] focus:outline-none focus:border-[var(--color-primary-400)]"
                                id="name"
                                name="name"
                                type="name"
                                placeholder=" " 
                                required
                            />
                            <label
                                htmlFor="name" 
                                className="absolute left-0 -top-3.5 text-[var(--color-primary-300)] text-sm transition-all duration-300
                                            peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                                            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)]
                                            peer-focus:text-sm"
                            >
                                Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="peer h-10 w-full border-b-2 border-[var(--color-primary-600)] 
                                            text-[var(--color-primary-800)] focus:outline-none focus:border-[var(--color-primary-400)]"
                                id="email"
                                name="email"
                                type="email"
                                placeholder=" " 
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

                        <div className="relative">
                            <input
                                className="peer h-10 w-full border-b-2 border-[var(--color-primary-600)] 
                                            text-[var(--color-primary-800)] focus:outline-none focus:border-[var(--color-primary-400)]"
                                id="phone"
                                name="phone"
                                type="phone"
                                placeholder=" " 
                                required
                            />
                            <label
                                htmlFor="phone" 
                                className="absolute left-0 -top-3.5 text-[var(--color-primary-300)] text-sm transition-all duration-300
                                            peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                                            peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)]
                                            peer-focus:text-sm"
                            >
                                Celular
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                className="peer w-full h-24 resize-none border-b-2 border-[var(--color-primary-600)] 
                                        text-[var(--color-primary-800)] bg-transparent focus:outline-none 
                                        focus:border-[var(--color-primary-400)]"
                                id="message"
                                name="message"
                                placeholder=" "
                                required
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-0 -top-3.5 text-[var(--color-primary-300)] text-sm transition-all duration-300
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)]
                                        peer-focus:text-sm"
                            >
                                Mensagem
                            </label>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center mt-8">
                        <button 
                            type="submit" 
                            className="bg-[var(--color-primary-600)] text-[var(--color-primary-50)] p-2 rounded w-full
                            hover:bg-[var(--color-primary-800)] transition duration-[500ms] font-bold cursor-pointer"
                        >
                            Enviar mensagem
                        </button>
                    </div>
                </div>
        </form>

        
        
       
    )
};

export default Contact;