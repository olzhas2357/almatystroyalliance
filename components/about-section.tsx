import { Building2, CheckCircle, Clock, Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">О компании</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Almaty Alliance Stroy</h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Мы строительная компания с многолетним опытом работы на рынке Казахстана. Наша миссия — создавать
              качественные, комфортные и энергоэффективные дома для наших клиентов.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Company team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/team.jpg?height=310&width=550"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Качество</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Используем только проверенные материалы и современные технологии строительства
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Профессионализм</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Наша команда состоит из опытных специалистов с многолетним стажем работы
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Сроки</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Строго соблюдаем установленные сроки строительства и сдачи объектов
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Опыт</h3>
                  </div>
                  <p className="text-muted-foreground">Более 7 лет успешной работы на строительном рынке Казахстана</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

