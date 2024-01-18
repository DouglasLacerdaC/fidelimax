"use client"

import { useForm } from "react-hook-form"

import { StarsRatingQuestion } from "./questions-templates/stars-rating-question"
import { TextQuestion } from "./questions-templates/text-question"
import { SelectQuestion } from "./questions-templates/select-question"
import { SelectWithRadio } from "./questions-templates/select-with-radio"
import { MultipleRadios } from "./questions-templates/multiple-radios"
import { MultipleChoices } from "./questions-templates/multiple-choices"

import { SubmitButton } from "./submit-button"
import { QuestionType } from "@/entities/questions"
import { questionsService } from "@/services/questions"

import { Modal } from "@/components/modal"
import { useState } from "react"
import { CustomButton } from "./custom-button"

interface DynamicQuestionFormProps {
  questions: QuestionType[]
}

export function DynamicQuestionForm({ questions }: DynamicQuestionFormProps) {
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    type: Modal.FailedContent,
    title: "",
    description: ""
  })

  const { handleSubmit, formState: { isSubmitting }, control, clearErrors } = useForm()

  function closeModal() {
    setInfoModal(state => ({...state, isOpen: false}))
  }

  async function onSubmit(responses: any) {
    const formattedData = Object.entries(responses).map(([property, value], index: number) => {
      return {
        userId: 1,
        id: index,
        title: property,
        body: value
      }
    })

    try {
      await questionsService.submit(formattedData)
      setInfoModal({
        isOpen: true,
        type: Modal.SuccessContent,
        title: "Sucesso ao enviar ⚡🎉!",
        description: "Obrigado pelas suas respostas! Valorizamos muito sua contribuição e estamos sempre buscando maneiras de melhorar."
      })

      clearErrors()
    } catch {
      setInfoModal({
        isOpen: true,
        type: Modal.FailedContent,
        title: "Não foi possível enviar seu formulário 😔!",
        description: "Tivemos alguns problemas por aqui, mas tente novamente ou mais tarde."
      })
    }
  }

  async function handleSubmitError() {
    try {
      const response = await questionsService.submitError()
      setInfoModal({
        isOpen: true,
        type: Modal.FailedContent,
        title: response.error,
        description: response.warning != "" ? response.warning : "Tivemos um problema por aqui... Mas tente novamente ou mais tarde 🤠."
      })
    } catch {
      setInfoModal({
        isOpen: true,
        type: Modal.FailedContent,
        title: "Não foi possível enviar o erro",
        description: ""
      })
    }
  }

  async function handleSubmitSuccess() {
    try {
      await questionsService.submitSuccess()
      setInfoModal({
        isOpen: true,
        type: Modal.SuccessContent,
        title: "Conseguimos enviar o sucesso ⚡🎉!",
        description: "Agradecemos por nos enviar!"
      })
    } catch {
      setInfoModal({
        isOpen: true,
        type: Modal.FailedContent,
        title: "Não foi possível enviar o sucesso",
        description: ""
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-8 rounded-2xl space-y-10 bg-white">
        {questions.map((question, index) => {
          switch (question.typeQuestion) {
            case 1:
              return <StarsRatingQuestion key={index} question={question} control={control} />
            case 2:
              return <MultipleRadios key={index} question={question} control={control} />
            case 3:
              return <TextQuestion key={index} question={question} control={control} />
            case 4:
              return <SelectQuestion key={index} question={question} control={control} />
            case 5:
              return <SelectWithRadio key={index} question={question} control={control} />
            case 6:
              return <MultipleChoices key={index} question={question} control={control} />
            default:
              return null
          }
        })}

        <div className="flex justify-between flex-wrap gap-4">
          <SubmitButton isLoading={isSubmitting} />

          <div className="flex-1 flex gap-2 flex-wrap">
            <CustomButton onClick={handleSubmitError} text="Enviar error" />
            <CustomButton onClick={handleSubmitSuccess} text="Enviar sucesso"/>
          </div>
        </div>

        </div>

      <Modal.Root isOpen={infoModal.isOpen}>
        <infoModal.type onClose={closeModal}>
          <Modal.Message 
            title={infoModal.title}
            description={infoModal.description}
          />
        </infoModal.type>
      </Modal.Root>
    </form>
  )
}