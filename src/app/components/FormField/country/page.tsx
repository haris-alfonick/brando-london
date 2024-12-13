import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Country() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="uk">UK</SelectItem>
          <SelectItem value="usa">USA</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
