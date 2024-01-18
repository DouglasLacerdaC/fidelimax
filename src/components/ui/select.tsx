"use client"

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

interface SelectProps {
  placeholder: string,
  options: {
    value: number,
    description: string
  }[]
  onSelected: (value: number) => void
}

export function Select({ options, placeholder, onSelected }: SelectProps) {
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const [valueSelected, setValueSelected] = useState("")

  return (
    <div data-open={isSelectOpen} className="group relative w-full">
      <div 
        className="p-4 flex justify-between items-center rounded-lg border border-gray-400 cursor-pointer transition hover:bg-gray-100 group-data-[open=true]:shadow-focus"
        onClick={() => setIsSelectOpen(state => !state)}
      >
        <div className="font-medium text-gray-500">
          {valueSelected ? (
            <span>{valueSelected}</span>
          ) : (
            <span>{placeholder}</span>
          )}
        </div>

        <ChevronDown />
      </div>

      <div className="scale-75 opacity-0 invisible absolute mt-2 w-fit border border-gray-400 rounded-lg overflow-hidden transition bg-white group-data-[open=true]:scale-100 group-data-[open=true]:visible group-data-[open=true]:opacity-100">
        <ul>
          {options.map(option => (
            <SelectItem
              key={option.value}
              value={option.description}
              isSelected={valueSelected == option.description}
              onSelect={() => {
                setValueSelected(option.description)
                setIsSelectOpen(false)
                onSelected(option.value)
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

interface SelectItemProps {
  value: string
  onSelect?: () => void
  isSelected: boolean
}

function SelectItem({ isSelected, onSelect, value }: SelectItemProps) {
  return (
    <li
      onClick={onSelect}
      data-selected={isSelected} 
      className="group px-4 py-2 flex gap-4 transition hover:bg-gray-100 "
    >
      <span>{value}</span>

      <Check 
        className="opacity-0 text-yellow-800 group-data-[selected=true]:opacity-100" 
      />
    </li>
  )
}