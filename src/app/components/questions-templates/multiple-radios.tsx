import { Control, Controller, FieldValues } from "react-hook-form";

import { Description } from "@/components/ui/description";
import { RadioButton } from "@/components/ui/radio-button";
import { Title } from "@/components/ui/title";

import { QuestionType } from "@/entities/questions";

const QUANTITY_RADIOS = 10

interface MultipleRadiosProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function MultipleRadios({ question, control }: MultipleRadiosProps) {
  return (
    <fieldset className="space-y-8">
      <div className="space-y-2">
        <Title text="Título da pergunta deve ficar aqui" />
        <Description text={question.content} />
      </div>

      <div className="flex justify-between items-start flex-wrap">
        {Array.from({ length: QUANTITY_RADIOS }).map((_, index) => (
          <Controller
            key={index + 1}
            control={control}
            name={question.content + question.answerValue}
            rules={{ required: question.mandatory }}
            defaultValue={question.answerValue}
            render={({ field }) => (
              <RadioButton
                label={`${index + 1}`}
                position="vertical"
                value={index + 1}
                id={`${index + 1}`}
                defaultChecked={field.value == index + 1}
                onChange={(newValue) => field.onChange(newValue)}
                name={field.name}
              />
            )}
          />
        ))}
      </div>
    </fieldset>
  )
}