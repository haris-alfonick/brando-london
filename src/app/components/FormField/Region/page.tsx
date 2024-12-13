import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Region() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="state1">State 1</SelectItem>
          <SelectItem value="state2">State 2</SelectItem>
          <SelectItem value="state3">State 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
