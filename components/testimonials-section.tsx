import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Отзывы</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Что говорят наши клиенты</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Мнения тех, кто уже доверил нам строительство своего дома
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
              </div>
              <CardTitle>Алексей Иванов</CardTitle>
              <CardDescription>Алматы</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Очень доволен работой компании Almaty Alliance Stroy. Дом построили качественно и в срок. Особенно
                порадовало внимание к деталям и индивидуальный подход."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
              </div>
              <CardTitle>Мария Петрова</CardTitle>
              <CardDescription>Талгар</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Профессиональная команда, которая знает свое дело. Все этапы строительства были прозрачными, а
                результат превзошел ожидания. Рекомендую!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
                <Star className="fill-yellow-500 h-5 w-5" />
              </div>
              <CardTitle>Ержан Сулейменов</CardTitle>
              <CardDescription>Каскелен</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                "Сотрудничество с Almaty Alliance Stroy было приятным опытом. Строители учли все наши пожелания и
                предложили оптимальные решения. Дом получился именно таким, как мы мечтали."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

