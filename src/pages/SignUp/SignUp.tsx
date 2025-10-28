import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalWelcome from "../../components/ModalWelcome/ModalWelcome";
// Importa o conteúdo dos termos para uso
import PrivacyTermsContent from "../../components/PrivacyTermsContent/PrivacyTermsContent"; 

type FieldName = "name" | "email" | "password" | "confirm";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [terms, setTerms] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);

  // ✅ validação por campo (com email aprimorado)
  const validateField = (field: FieldName, value: string): boolean => {
    switch (field) {
      case "name":
        return value.length > 2;

        case "email": {
          const atIndex = value.indexOf("@");
            // deve conter @ e haver caracteres depois dele
            return atIndex > 0 && atIndex < value.length - 1;
        }

        case "password":
          return value.length > 6;

        case "confirm":
          return value === password && value.length > 0;

          default:
            return false;
        }
  };

    // cor da borda
    const getBorderColor = (field: FieldName, value: string) => {
        if (focusedField === field && value === "")
            return "border-[var(--color-primary-700)]";
        if (validateField(field, value)) return "border-green-500";
        if (value === "") return "border-gray-300";
        return "border-red-500";
    };

    const isFormValid =
      validateField("name", name) &&
      validateField("email", email) &&
      validateField("password", password) &&
      validateField("confirm", confirm) &&
      terms;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!isFormValid) return;
      alert("Conta criada com sucesso!");
      navigate("/login");
    };

    return (
        <div className="h-screen bg-[var(--color-primary-100)] relative">
            <button
                onClick={() => navigate("/")}
                className="absolute top-5 left-5 text-[var(--color-primary-600)] hover:underline font-medium cursor-pointer"
            >
                Voltar para Página principal
            </button>

            <form
                onSubmit={handleSubmit}
                className="h-[100vh] flex flex-col items-center justify-center bg-[var(--color-primary-100)]"
            >
                <h1 className="text-center text-4xl p-10">Cadastro</h1>
                <div className="flex flex-col w-full max-w-xs sm:max-w-md p-8 rounded-lg shadow-lg bg-[var(--color-primary-50)]">
                    <div className="flex flex-col gap-4">
                        <label>
                            <span className="font-medium">Nome</span>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className={`border-2 p-2 rounded w-full transition-all duration-300 focus:outline-none ${getBorderColor(
                                    "name",
                                    name
                                )}`}
                                required
                            />
                        </label>

                        <label>
                            <span className="font-medium">Email</span>
                            <input
                                type="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                className={
                                    `border-2 p-2 rounded w-full transition-all duration-300 focus:outline-none 
                                    ${getBorderColor("email", email)
                                    }`}
                                required
                            />
                        </label>

                        <label>
                            <span className="font-medium">Senha</span>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                className={`border-2 p-2 rounded w-full transition-all duration-300 focus:outline-none ${getBorderColor(
                                    "password",
                                    password
                                )}`}
                                required
                            />
                        </label>

                        <label>
                            <span className="font-medium">Confirme</span>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                onFocus={() => setFocusedField("confirm")}
                                onBlur={() => setFocusedField(null)}
                                className={`border-2 p-2 rounded w-full transition-all duration-300 focus:outline-none ${getBorderColor(
                                    "confirm",
                                    confirm
                                )}`}
                                required
                            />
                        </label>
                    </div>

                    <div className="flex items-center mt-4 mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={terms}
                            onChange={(e) => setTerms(e.target.checked)}
                            className="h-4 w-4 text-[#37708C] border-gray-300 rounded focus:ring-[#37708C]"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            Li e concordo com os
                            <button
                                type="button" 
                                onClick={() => setIsTermsModalOpen(true)} 
                                className="text-[var(--color-primary-600)] hover:underline cursor-pointer font-medium ml-1"
                            >
                                termos de privacidade
                            </button>
                            .
                        </label>
                    </div>

                    <div className="flex flex-col items-center mt-8">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`p-2 rounded w-full font-semibold transition duration-300 cursor-pointer ${
                                isFormValid
                                    ? "bg-[var(--color-primary-600)] text-white hover:bg-[var(--color-primary-500)]"
                                    : "bg-[var(--color-desabled)] text-gray-200 cursor-not-allowed"
                            }`}
                        >
                            Criar conta
                        </button>

                        <p className="p-3">
                            Já tem conta?
                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="text-[var(--color-primary-600)] hover:underline font-medium ml-1 cursor-pointer"
                            >
                                Acessar
                            </button>
                        </p>
                    </div>
                </div>
            </form>

            <ModalWelcome 
                isOpen={isTermsModalOpen} // Controlado pelo estado
                onClose={() => setIsTermsModalOpen(false)} // Fecha o modal
            >
                <PrivacyTermsContent /> {/* Conteúdo injetado */}
            </ModalWelcome>
        </div>
    );
};

export default SignUp;