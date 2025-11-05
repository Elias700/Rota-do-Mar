import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ModalWelcome from "../../components/ModalWelcome/ModalWelcome";
import PrivacyTermsContent from "../../components/PrivacyTermsContent/PrivacyTermsContent";

import Logo from "../../assets/logo2-sem-fundo.png";
import backgroundImg from "../../assets/pexels-pixabay-269583.jpg";

type FieldName = "name" | "email" | "password" | "confirm";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const [focusedField, setFocusedField] = useState<FieldName | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Validação de cada campo
  const validateField = (field: FieldName, value: string): boolean => {
    switch (field) {
      case "name":
        return value.trim().length > 2;
      case "email": {
        const atIndex = value.indexOf("@");
        return atIndex > 0 && atIndex < value.length - 3;
      }
      case "password":
        return value.length >= 6;
      case "confirm":
        return value === password && value.length > 0;
      default:
        return false;
    }
  };

  // ✅ Mensagens de erro
  const getErrorMessage = (field: FieldName): string | null => {
    switch (field) {
      case "name":
        return name && !validateField("name", name)
          ? "O nome deve ter pelo menos 3 caracteres"
          : null;
      case "email":
        return email && !validateField("email", email)
          ? "Informe um e-mail válido com @ e mais caracteres depois"
          : null;
      case "password":
        return password && !validateField("password", password)
          ? "A senha deve ter pelo menos 6 caracteres"
          : null;
      case "confirm":
        return confirm && !validateField("confirm", confirm)
          ? "As senhas não coincidem"
          : null;
      default:
        return null;
    }
  };

  // ✅ Cor da borda (verde, vermelho ou padrão)
  const getBorderColor = (field: FieldName, value: string) => {
    if (focusedField === field && value === "") return "border-[var(--color-primary-400)]";
    if (value === "") return "border-gray-300";
    if (validateField(field, value)) return "border-green-500";
    return "border-[var(--color-error)]";
  };

  // ✅ Verificação geral do formulário
  const isFormValid =
    validateField("name", name) &&
    validateField("email", email) &&
    validateField("password", password) &&
    validateField("confirm", confirm) &&
    terms;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;

    setError(null);
    setSubmitting(true);
    try {
      await register({ name, email, password });
      navigate("/login");
    } catch (err: any) {
      setError(err?.message || "Falha ao cadastrar");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="absolute top-5 left-5 text-[var(--color-primary-50)] hover:underline font-medium cursor-pointer"
      >
        Voltar para Página principal
      </button>

      <form
        onSubmit={handleSubmit}
        className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <img 
            src={Logo} 
            alt="logo" 
            className="h-28 md:h-40" 
        />

        <div className="flex flex-col w-full max-w-xs sm:max-w-md md:max-w-lg p-6 md:p-8 
                        rounded-xl shadow-2xl bg-[var(--color-primary-50)] animate-fadeIn 
                        bg-gradient-to-r from-[var(--color-primary-800)] to-[var(--color-primary-500)]"
        >
          <div className="flex flex-col gap-6">
        
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={
                            `peer h-10 w-full border-b-2 text-[var(--color-primary-100)] 
                            focus:outline-none transition-all duration-300 ${getBorderColor(
                    "name",
                    name
                    )}`
                }
                required
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-[var(--color-primary-400)] text-sm transition-all duration-300
                peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)] peer-focus:text-sm"
              >
                Nome
              </label>
              {getErrorMessage("name") && (
                <p className="text-sm text-[var(--color-error)] mt-1">{getErrorMessage("name")}</p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`peer h-10 w-full border-b-2 text-[var(--color-primary-100)] focus:outline-none transition-all duration-300 ${getBorderColor(
                  "email",
                  email
                )}`}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-[var(--color-primary-400)] text-sm transition-all duration-300
                peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)] peer-focus:text-sm"
              >
                Email
              </label>
              {getErrorMessage("email") && (
                <p className="text-sm text-[var(--color-error)] mt-1">{getErrorMessage("email")}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`peer h-10 w-full border-b-2 text-[var(--color-primary-900)] focus:outline-none transition-all duration-300 ${getBorderColor(
                  "password",
                  password
                )}`}
                required
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-[var(--color-primary-400)] text-sm transition-all duration-300
                peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)] peer-focus:text-sm"
              >
                Senha
              </label>
              {getErrorMessage("password") && (
                <p className="text-sm text-[var(--color-error)] mt-1">{getErrorMessage("password")}</p>
              )}
            </div>

            <div className="relative">
              <input
                id="confirm"
                name="confirm"
                type="password"
                placeholder=" "
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                onFocus={() => setFocusedField("confirm")}
                onBlur={() => setFocusedField(null)}
                className={`peer h-10 w-full border-b-2 text-[var(--color-primary-900)] focus:outline-none transition-all duration-300 ${getBorderColor(
                  "confirm",
                  confirm
                )}`}
                required
              />
              <label
                htmlFor="confirm"
                className="absolute left-0 -top-3.5 text-[var(--color-primary-400)] text-sm transition-all duration-300
                peer-placeholder-shown:text-base peer-placeholder-shown:text-[var(--color-primary-400)]
                peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[var(--color-primary-600)] peer-focus:text-sm"
              >
                Confirmar Senha
              </label>
              {getErrorMessage("confirm") && (
                <p className="text-sm text-[var(--color-error)] mt-1">{getErrorMessage("confirm")}</p>
              )}
            </div>
          </div>

          <div className="flex items-center mt-6">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="h-4 w-4 rounded"
            />
            <label 
                htmlFor="terms" 
                className="ml-2 text-sm text-[var(--color-primary-100)]"
            >
              Li e concordo com os{" "}
              <button
                type="button"
                onClick={() => setIsTermsModalOpen(true)}
                className="text-[var(--color-primary-400)] hover:underline font-medium cursor-pointer"
              >
                termos de privacidade
              </button>
              .
            </label>
          </div>

          <div className="flex flex-col items-center mt-8">
            <button
              type="submit"
              disabled={!isFormValid || submitting}
              className={`p-2 rounded w-full font-semibold transition duration-300 cursor-pointer ${
                isFormValid && !submitting
                  ? "bg-[var(--color-primary-200)] text-[var(--color-primary-600)] hover:text-[var(--color-primary-100)] hover:bg-[var(--color-primary-400)]"
                  : "bg-[var(--color-desabled)] text-[var(--color-primary-100)] cursor-not-allowed"
              }`}
            >
              {submitting ? "Criando conta..." : "Criar conta"}
            </button>

            {error && (
              <p className="text-sm text-[var(--color-error)] text-center mt-2">{error}</p>
            )}

            <p className="mt-4 text-[var(--color-primary-400)]">
              Já tem conta?
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-[var(--color-primary-100)] hover:underline font-medium ml-1"
              >
                Acessar
              </button>
            </p>
          </div>
        </div>
      </form>

      {/* Modal de Termos */}
      <ModalWelcome isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)}>
        <PrivacyTermsContent />
      </ModalWelcome>
    </div>
  );
};

export default SignUp;
