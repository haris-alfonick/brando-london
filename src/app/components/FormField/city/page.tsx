import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function City() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="city1">City 1</SelectItem>
          <SelectItem value="city2">City 2</SelectItem>
          <SelectItem value="city3">City 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
