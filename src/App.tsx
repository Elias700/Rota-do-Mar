import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import Beaches from './pages/Beaches/Beaches';
import Footer from './components/Footer/Footer';
import Weather from './pages/Weather/Weather';
import Contact from './pages/Contact/Contact';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Welcome />
        <Beaches />
        <Weather />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App;

/*Estrutura de Pastas e Conexão (O Fluxo de Dados)
Seu projeto segue um padrão comum em React:

src/data/beachesData.ts: É o Banco de Dados (fonte única de dados).

src/pages/Beaches/Beaches.tsx: É a Página de Listagem que consome os dados e renderiza os cards.

src/components/Features/BeachCard.tsx: É o Card Reutilizável que usa os dados para se exibir e é o ponto de partida para a navegação.

src/pages/BeachesDetail/BeachesDetail.tsx: É a Página de Detalhes que recebe o ID pela URL e encontra o dado específico para exibir.

O fluxo de informação é este:

beachesData.ts⟶Beaches.tsx⟶BeachCard.tsx⟶Router URL⟶BeachesDetail.ts

1. src/data/beachesData.ts (A Fonte de Dados)
Este arquivo é a definição dos dados para todas as praias.

Código Chave	Explicação
export interface Beach { ... }	Define um contrato de dados (interface) chamado Beach. Ele usa TypeScript para garantir que cada objeto de praia tenha exatamente as propriedades id (number), name (string), description (string) e imageUrl (string).
export const beaches: Beach[] = [...]	Cria um array (lista) de objetos, onde cada objeto é do tipo Beach. Este array, chamado beaches, é o que será importado e usado em outras partes da aplicação.

Exportar para Sheets
Ligação: É o fornecedor de dados e de tipagem (Beach) para todos os outros componentes.

2. src/pages/Beaches/Beaches.tsx (A Página de Listagem)
Este componente é a view principal que mostra todas as praias.

Código Chave	Explicação
import type { Beach } from '../../data/beachesData';	Importa apenas a interface (tipo) Beach. O uso de import type é uma boa prática de TypeScript que evita erros de build e garante que Beach é usado apenas para tipagem.
import { beaches } from '../../data/beachesData';	Importa o array de dados beaches.
{beaches.map((beach: Beach) => (...)}	Faz um loop (mapeamento) sobre o array beaches. Para cada item (que é tipado como Beach), ele renderiza um componente BeachCard.
<BeachCard key={beach.id} beach={beach} />	Renderiza o card, passando o objeto completo da praia (beach) como uma propriedade para o componente BeachCard.

Exportar para Sheets
Ligação: Ele recebe a lista de beaches e chama o BeachCard para cada item.

3. src/components/Features/BeachCard.tsx (O Card Clicável)
Este componente reutilizável exibe o resumo de uma única praia e lida com a navegação.

Código Chave	Explicação
import type { Beach } from ...	Importa a tipagem Beach para garantir que as propriedades recebidas estejam corretas.
import { useNavigate } from 'react-router-dom';	Importa o hook useNavigate do React Router para permitir a navegação programática (sem usar o componente <Link>).
interface BeachCardProps { beach: Beach; }	Define o formato das props (propriedades) que este componente espera receber: um único objeto chamado beach do tipo Beach.
const navigate = useNavigate();	Inicializa a função de navegação.
const handleCardClick = () => { navigate(/beaches/${beach.id}); };	Esta função é o coração da interatividade. Quando o div é clicado, ela usa o Maps para mudar a URL para algo como /beaches/1 ou /beaches/5, dependendo do id da praia.
onClick={handleCardClick}	Anexa a função handleCardClick ao evento de clique do container div.

Exportar para Sheets
Ligação: Ele recebe um objeto Beach e, ao ser clicado, muda a URL do navegador, iniciando o processo de carregamento da página de detalhes.

4. src/pages/BeachesDetail/BeachesDetail.tsx (A Página de Detalhes)
Este componente é carregado quando o usuário clica em um card, sendo responsável por exibir todas as informações.

Código Chave	Explicação
import { useParams } from 'react-router-dom';	Importa o hook para extrair parâmetros da URL.
import { beaches } from '../../data/beachesData';	Re-importa a lista completa de praias.
const { id } = useParams<{ id: string }>();	Captura o ID da URL (ex: se a URL é /beaches/5, id será a string "5").
`const beachId = parseInt(id	
const beach = beaches.find(b => b.id === beachId);	Busca no array beaches o único objeto cuja propriedade id corresponde ao beachId extraído da URL.
if (!beach) { ... }	Um tratamento de erro simples, caso o usuário digite um ID inválido diretamente na barra de endereço.
<h1>{beach.name}</h1>	Finalmente, renderiza os detalhes da praia (name, description, imageUrl, etc.) que foi encontrada.

Exportar para Sheets
Ligação: Ele usa o ID da URL (enviado pelo BeachCard via Maps) para localizar o dado em beachesData.ts e renderizar as informações completas.

O seu código está muito bem interligado! Seus próximos passos seriam configurar as rotas no seu App.tsx e estilizar esses componentes para que fiquem com a aparência de um site profissional.*/