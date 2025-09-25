import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>
            <div className="bg-[var(--color-primary-600)] flex justify-around items-center p-8 shadow-2xl">
                <img src={Logo} alt="Logo Rota do Mar" className='h-20'/>
                <nav className='flex'>
                    <ul className="flex gap-10 [&>li]:text-[var(--color-primary-50)] [&>li]:text-2xl [&>li]:cursor-pointer [&>li]:hover:underline [&>li]:hover:underline-offset-15 [&>li]:hover:transition [&>li]:duration-[500ms]">
                        <li>Home</li>
                        <li>Praias</li>
                        <li>Previsão do Tempo</li>
                        <li>Contato</li>
                    </ul>
                </nav>
                <div className='[&>button]:text-[var(--color-primary-900)] flex gap-10'>
                    <button className='bg-[var(--color-primary-50)] py-3 px-5 rounded-lg text-2xl cursor-pointer font-semibold shadow-md transition-colors hover:bg-[var(--color-primary-800)] hover:text-[var(--color-primary-50)]  duration-[500ms]'>Login</button>
                    <button className='bg-[var(--color-primary-50)] py-3 px-5 rounded-lg text-2xl cursor-pointer font-semibold shadow-md transition-colors  hover:bg-[var(--color-primary-800)] hover:text-[var(--color-primary-50)]  duration-[500ms] '>Cadastro</button>
                 
                </div>
            </div>
        </header>
    )
};

export default Header;