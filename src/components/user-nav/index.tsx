"use client"

import { ChevronDown, PencilLine } from "lucide-react";
import { useState } from "react";

export function UserNav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div data-open={isDropdownOpen} className="group relative">
      <button 
        className="flex items-center gap-2 sm:gap-4 hover:scale-95 hover:opacity-80 transition duration-500"
        onClick={() => setIsDropdownOpen(state => !state)}  
      >
        <div className="w-10 h-10 grid place-items-center rounded-full font-semibold text-lg bg-gray-700">
          F
        </div>

        <span className="hidden font-semibold text-xs sm:inline-block">
          Fábio C Pinto
        </span>

        <ChevronDown className="transition duration-500 group-data-[open=true]:rotate-180" />
      </button>

      <div className="scale-90 opacity-0 absolute right-0 min-w-full mt-2 p-3 rounded-lg transition duration-500 bg-gray-700 group-data-[open=true]:scale-100 group-data-[open=true]:opacity-100">
        <ul>
          <li className="flex items-center gap-2">
            <PencilLine className="h-4 w-4" />
            
            <span className="text-nowrap text-sm">
              Minhas respostas
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}