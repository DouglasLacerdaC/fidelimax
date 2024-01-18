"use client"

import { Control, Controller, FieldValues } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxRounded } from "@/components/ui/checkbox-rounded";
import { Legend } from "@/components/ui/legend";
import { QuestionType } from "@/entities/questions";
import { useEffect, useState } from "react";

interface MultipleChoicesProps {
  question: QuestionType,
  control: Control<FieldValues, any>
}

export function MultipleChoices({ question, control }: MultipleChoicesProps) {
  const { _formState: { errors } } = control
  const CheckboxRendering = question.horizontal == true ? CheckboxRounded : Checkbox

  const nameField = (question.content + question.horizontal).toString()

  return (
    <fieldset className="space-y-2">
      <Legend text={question.content} />
      
      <div data-horizontal={question.horizontal} className="data-[horizontal=true]:flex data-[horizontal=true]:flex-wrap data-[horizontal=true]:gap-2 data-[horizontal=false]:space-y-2">
        {question.itens?.map(item => (
          <Controller
            key={item.value}
            control={control}
            name={nameField}
            rules={{ required: { value: true, message: "Selecione no minímo 1 item" } }}
            defaultValue={[]}
            render={({ field, fieldState: { error } }) => (
              <>
                <CheckboxRendering
                  error={error?.message}
                  label={item.description}
                  value={item.value}
                  id={`${item.description} + ${question.horizontal}`}
                  name={field.name}
                  defaultChecked={field.value === item.value}
                  onChange={newValue => {
                    newValue.target.checked ? field.onChange([...field.value, newValue.target.value])
                    : field.onChange(field.value?.filter((value: any) => value !== newValue.target.value))
                  }}
                />
              </>
            )}
          />
        ))}
      </div>
    </fieldset>
  )
}