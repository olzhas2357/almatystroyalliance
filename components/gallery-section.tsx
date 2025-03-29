import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function GallerySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Галерея</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Наши проекты</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Посмотрите примеры домов, которые мы построили для наших клиентов
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          <div className="overflow-hidden rounded-lg">
            <img
                src="/0320.jpg"
                alt="Современный дом"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Современный дом</h3>
              <p className="text-sm text-muted-foreground">Алматы, 2023</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
                src="/placeholder.svg?height=400&width=600&text=Загородный+коттедж"
                alt="Загородный коттедж"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Здесь будет ваше проект</h3>
              <p className="text-sm text-muted-foreground">Место, Год</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
                src="/placeholder.svg?height=400&width=600&text=Загородный+коттедж"
                alt="Загородный коттедж"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Здесь будет ваше проект</h3>
              <p className="text-sm text-muted-foreground">Место, Год</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
                src="/placeholder.svg?height=400&width=600&text=Загородный+коттедж"
                alt="Загородный коттедж"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Здесь будет ваше проект</h3>
              <p className="text-sm text-muted-foreground">Место, Год</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
                src="/placeholder.svg?height=400&width=600&text=Загородный+коттедж"
                alt="Загородный коттедж"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Здесь будет ваше проект</h3>
              <p className="text-sm text-muted-foreground">Место, Год</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
                src="/placeholder.svg?height=400&width=600&text=Загородный+коттедж"
                alt="Загородный коттедж"
                className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
            <div className="p-4">
              <h3 className="font-semibold">Здесь будет ваше проект</h3>
              <p className="text-sm text-muted-foreground">Место, Год</p>
            </div>
          </div>
      </div>
      <div className="flex justify-center">
        <Link href="/gallery">
          <Button variant="outline" className="gap-2">
            Смотреть все проекты
            <ArrowRight className="h-4 w-4"/>
          </Button>
        </Link>
      </div>
    </div>
</section>
)
}

