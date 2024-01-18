import { Control, Controller, FieldValues } from "react-hook-form"

import { Select } from "@/components/ui/select"

import { QuestionType } from "@/entities/questions"

interface SelectQuestionProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function SelectQuestion({ question, control }: SelectQuestionProps) {
  return (
    <fieldset className="space-y-2">
      <Controller
        control={control}
        name={question.content}
        rules={{ required: { value: question.mandatory, message: "Campo obrigatório" } }}
        render={({ field, fieldState }) => (
          <div className="space-y-2">
            {question.itens &&
              <Select 
                placeholder={question.content} 
                options={question.itens}
                onSelected={(newValue) => field.onChange(newValue)}
              />
            }

            {fieldState.error && (
              <span role="alert" className="text-red-500 block">{fieldState.error.message}</span>
            )}
          </div>
        )}
      />
    </fieldset>
  )
}