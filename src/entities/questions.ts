export interface QuestionsType {
  itens: QuestionType[],
  error: string,
  warning: string
}

export interface QuestionType {
  typeQuestion: number,
  answerValue?: number,
  mandatory: boolean,
  content: string,
  horizontal?: boolean,
  itens?: {
    value: number,
    description: string
  }[]
}