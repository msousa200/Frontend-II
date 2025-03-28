import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ArticlesList from './components/ArticlesList';

const queryClient = new QueryClient();

function App () {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
                        Gestão de Produtos
                    </h1>
                </div>
            </div>
            <ArticlesList/>
        </QueryClientProvider>
    );
            
}

export default App;