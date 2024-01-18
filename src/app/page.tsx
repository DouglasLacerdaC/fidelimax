import { Header } from "@/components/header"
import { DynamicQuestionForm } from "./components/dynamic-question-form"

import { questionsService } from "@/services/questions"

export default async function Home() {
  const { itens } = await questionsService.getAll()
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      <div className="h-80 space-y-4 bg-gray-900">
        <Header />

        <div className="px-3 sm:px-16 w-full">
          <p className="text-gray-400 text-xs">Pesquisa de satisfação</p>
        </div>
      </div>

      <main className="px-3 -mt-44 w-full max-w-2xl mx-auto space-y-6 pb-8">
        <h1 className="text-white text-4xl font-semibold">
          Pesquisa de Satisfação
        </h1>

        <DynamicQuestionForm questions={itens} />
      </main>
    </div>
  )
}
