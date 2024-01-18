import { Control, Controller, FieldValues } from "react-hook-form"

import { QuestionType } from "@/entities/questions"
import { Legend } from "@/components/ui/legend"
import { RadioButton } from "@/components/ui/radio-button"

interface SelectWithRadioProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function SelectWithRadio({ question, control }: SelectWithRadioProps) {
  return (
    <fieldset className="space-y-2">
      <Legend text={question.content} />

      <div className="flex gap-4">
        <Controller
          control={control}
          name={question.content}
          defaultValue={question.answerValue}
          rules={{ required: { value: question.mandatory, message: "Campo obrigatório" } }}
          render={({ field, fieldState }) => (
            <>
              {question.itens?.map((item) => (
                <RadioButton
                  key={item.value} 
                  label={item.description} 
                  id={item.description}
                  value={item.value}
                  onChange={(newValue) => field.onChange(newValue)}
                  defaultChecked={field.value === item.value}
                  name={field.name}
                />
              ))}

              {fieldState.error && (
                <span role="alert" className="text-red-500">{fieldState.error.message}</span>
              )}
            </>
          )}
        />
      </div>
    </fieldset>
  )
}