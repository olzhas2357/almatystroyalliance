import { BrickWallIcon as Brick, Home, Ruler, Wrench } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted" id="services">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Услуги</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Что мы предлагаем</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Полный спектр услуг по строительству домов — от проектирования до отделочных работ
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <Home className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Строительство домов</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Строительство частных домов, коттеджей и вилл по индивидуальным проектам
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Ruler className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Проектирование</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Разработка архитектурных проектов любой сложности с учетом всех пожеланий клиента
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Brick className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Отделочные работы</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Внутренняя и внешняя отделка помещений с использованием качественных материалов
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Wrench className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Инженерные системы</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Монтаж систем отопления, водоснабжения, канализации и электроснабжения</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

