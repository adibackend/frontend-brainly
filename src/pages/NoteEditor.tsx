"use client"

import type React from "react"
import { useState } from "react"

import { useNavigate } from "react-router-dom"
export interface Note {
    id?: string
    title: string
    content: string
    youtubeUrl?: string
    twitterUrl?: string
  }
  
 

export default function NoteEditor({ initialNote }: { initialNote?: Note }) {
  const [note, setNote] = useState<Note>(initialNote || { title: "", content: "", youtubeUrl: "", twitterUrl: "" })
  const navigate=useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd save the note to an API or database
    console.log("Saving note:", note)
    navigate('/dashboard')
  }

  return (
   <h1>zxc</h1>
  )
}

