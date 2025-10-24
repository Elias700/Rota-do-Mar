import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Logo2 from '../../assets/logo2-sem-fundo.png';

const Footer = () => {
    return (  
        <footer id="contato" className="bg-[var(--color-primary-50)]">
            <div>
                <div className="flex justify-center p-5">
                    <img 
                        src={Logo2} 
                        alt="logo" 
                        className="h-25"
                    />
                </div>
                <div >
                    <ul className="p-5
                    flex items-center justify-center gap-6 
                    [&>li]:text-2xl 
                    [&>li]:text-[var(--color-primary-700)] 
                    [&>li]:hover:text-[var(--color-primary-900)]
                    [&>li]:cursor-pointer"
                    >
                        <li>Home</li>
                        <li>Praias</li>
                        <li>Previsão do tempo</li>
                        <li>Contato</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <FaSquareInstagram 
                        className="
                            text-[var(--color-primary-700)] 
                            text-4xl hover:text-[var(--color-primary-900)] 
                            cursor-pointer
                            transition duration-500 ease-in-out transform hover:-translate-y-1 
                        "
                    />
                    <FaFacebookSquare 
                        className="
                            text-[var(--color-primary-700)] 
                            text-4xl hover:text-[var(--color-primary-900)] 
                            cursor-pointer
                            transition duration-500 ease-in-out transform hover:-translate-y-1 
                        "
                    />
                    <FaSquareXTwitter 
                        className="
                            text-[var(--color-primary-700)] 
                            text-4xl hover:text-[var(--color-primary-900)] 
                            cursor-pointer
                            transition duration-500 ease-in-out transform hover:-translate-y-1 
                        "
                    />
                </div>
                <p className="text-center text-[var(--color-primary-700)] font-bold p-10">
                    2025. Rota do mar. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer;