'use client'

import { Select, SelectItem, SelectProps } from "@heroui/react"



const animals = [
    { key: "cat", label: "Cat" },
    { key: "dog", label: "Dog" },
    { key: "elephant", label: "Elephant" },
    { key: "lion", label: "Lion" },
    { key: "tiger", label: "Tiger" },
    { key: "giraffe", label: "Giraffe" },
    { key: "dolphin", label: "Dolphin" },
    { key: "penguin", label: "Penguin" },
    { key: "zebra", label: "Zebra" },
    { key: "shark", label: "Shark" },
    { key: "whale", label: "Whale" },
    { key: "otter", label: "Otter" },
    { key: "crocodile", label: "Crocodile" },
];


export default function BaseSelect({...props}:Omit<SelectProps,'children'>) {
    return (
        <Select className="w-full" {...props} >
            {animals.map((animal) => (
                <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
        </Select>
    )
}