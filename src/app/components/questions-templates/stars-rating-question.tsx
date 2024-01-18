import { Control, Controller, FieldValues } from "react-hook-form";

import { Description } from "@/components/ui/description";
import { Title } from "@/components/ui/title";
import { QuestionType } from "@/entities/questions";
import { StarsRating } from "@/components/stars-rating";

interface StarsRatingQuestionProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function StarsRatingQuestion({ question, control }: StarsRatingQuestionProps) {
  return (
    <fieldset className="space-y-4">
      <div className="space-y-2">
        <Title text="Título da pergunta deve ficar aqui" />
        <Description text={question.content} />
      </div>

      <Controller
        control={control}
        name={question.content}
        defaultValue={question.answerValue}
        render={({ field }) => (
          <StarsRating
            defaultValue={field.value} 
            onSelected={newValue => field.onChange(newValue)}
          />
        )}
      />
    </fieldset>
  )
}