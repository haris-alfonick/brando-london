import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  name: string;
  onChange: (value: string) => void; // Callback function for change events
}

export function Country({ name, onChange }: SelectProps) {
  const handleChange = (value: string) => {
    onChange(value); // Call the parent-defined onChange handler
  };

  return (
    <Select name={name} onValueChange={handleChange}>
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
  );
}