"use client"

import { Star } from "lucide-react";
import { useState } from "react";

interface StarsRatingProps {
  defaultValue?: number
  onSelected: (newValue: number) => void
}

export function StarsRating({ defaultValue, onSelected }: StarsRatingProps) {
  const [quantitySelected, setQuantitySelected] = useState(defaultValue ?? 0)
  const [itemIsFocused, setItemIsFocused] = useState(0)

  function updateQuantityStars(quantity: number) {
    setQuantitySelected(quantity)
    onSelected(quantity)
  }

  return (
    <div className="w-fit flex flex-wrap gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="cursor-pointer" key={index} onClick={() => updateQuantityStars(index + 1)}>
          <Star
            size={64}
            data-fill={index < quantitySelected}
            data-hover={index < itemIsFocused}
            className="border-none text-transparent transition duration-500 fill-gray-400 data-[fill=true]:fill-yellow-800 data-[hover=true]:fill-orange-500"
            onMouseEnter={() => setItemIsFocused(index + 1)}
            onMouseLeave={() => setItemIsFocused(0)}
          />
        </div>
      ))}
    </div>
  )
}