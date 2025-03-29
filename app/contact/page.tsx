"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-8 md:px-6">
        <Link href="/" className="inline-flex items-center mb-8 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Link>
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-muted-foreground mb-6">
              Если у вас есть вопросы о наших услугах или вы хотите получить консультацию, заполните форму или свяжитесь
              с нами по указанным контактам.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Адрес</h3>
                  <p className="text-muted-foreground">г. Алматы, ул. Елебекова 16</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <p className="text-muted-foreground">+7 (778) 555-50-16</p>
                </div>
              </div>
              {/*<div className="flex items-start gap-3">*/}
              {/*  <Mail className="h-5 w-5 text-primary mt-1" />*/}
              {/*  <div>*/}
              {/*    <h3 className="font-medium">Email</h3>*/}
              {/*    <p className="text-muted-foreground">info@almatystroy.kz</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Отправить сообщение</CardTitle>
              <CardDescription>Заполните форму ниже, и мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

