import { Control, Controller, FieldValues } from "react-hook-form";

import { Legend } from "@/components/ui/legend";
import { Textarea } from "@/components/ui/textarea";

import { QuestionType } from "@/entities/questions";

interface TextQuestionProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function TextQuestion({ question, control }: TextQuestionProps) {
  return (
    <fieldset className="space-y-2">
      <Legend
        text={question.content} 
        additionalText={!question.mandatory ? "opcional" : ""} 
      />

      <Controller
        control={control}
        name={question.content}
        defaultValue={question.answerValue}
        rules={{ required: question.mandatory }}
        render={({ field }) => (
          <Textarea
            placeholder="Digite aqui..." 
            defaultValue={field.value}
            onChange={(newValue) => field.onChange(newValue)}
          />
        )}
      />
    </fieldset>
  )
}