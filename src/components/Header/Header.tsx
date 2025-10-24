import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="bg-[var(--color-primary-600)] flex justify-around items-center p-2 shadow-2xl">
                <img src={Logo} alt="Logo Rota do Mar" className='h-20'/>
                <nav className='flex'>
                    <ul className="flex gap-10">
                        <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
                           <a href="#home">
                                <span className="relative z-10">Home</span>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[var(--color-primary-50)] group-hover:w-full">
                                </span>
                           </a>
                        </li>
                        <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
                           <a href="#praias">
                                <span className="relative z-10">Praias</span>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[var(--color-primary-50)] group-hover:w-full"></span>
                           </a>
                        </li>
                        <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
                           <a href="#tempo">
                                <span className="relative z-10">Previsão do Tempo</span>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[var(--color-primary-50)] group-hover:w-full"></span>
                           </a>
                        </li>
                        <li className="text-[var(--color-primary-50)] text-2xl cursor-pointer relative group w-max">
                           <a href="#contato">
                                <span className="relative z-10">Contato</span>
                                <span className="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-[var(--color-primary-50)] group-hover:w-full"></span>
                           </a>
                        </li>
                    </ul>
                </nav>
                <div className=' flex gap-5'>
                    <button onClick={() => navigate("/login")}
                        className="cursor-pointer   px-12 py-3 rounded-xl border-[1px] border-white text-white font-medium group shadow-md transition-colors hover:bg-[var(--color-primary-800)]"
                        >
                        <div className="relative overflow-hidden">
                            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                            >
                            Login
                            </p>
                            <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                            >
                            Login
                            </p>
                        </div>
                    </button>

                    <button onClick={() => navigate("/cadastro")}
                        className="cursor-pointer   px-12 py-3 rounded-xl border-[1px] border-white text-white font-medium group shadow-md transition-colors hover:bg-[var(--color-primary-800)]"
                        >
                        <div className="relative overflow-hidden">
                            <p
                            className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                            >
                            Cadastro
                            </p>
                            <p
                            className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                            >
                            Cadastro
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
};

export default Header;