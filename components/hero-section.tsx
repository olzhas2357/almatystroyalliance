import Link from "next/link"
import { Calculator } from "lucide-react"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ClipboardList, FileText, ListChecks, FormInput, MessageSquare } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
          <p className="text-8xl font-bold text-center font-serif">
            от <span className="text-yellow-500">100 тыс тг</span> - за 1 м<sup>2</sup>
          </p>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-500">
                Almaty Alliance Stroy
              </h1>

              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                🏡 Качественные дома под ключ в Алматы и области.
                Мы создаем надежные и стильные дома с индивидуальным подходом.
                Современные технологии и доступные цены для комфортной жизни.
              </p>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                ✨ Ваш идеальный дом — от идеи до заселения.
                Строим каркасные, кирпичные, газобетонные дома.
                Работаем по договору, соблюдаем сроки, подбираем материалы и проекты.
              </p>
            </div>
            {/*<div className="flex flex-col gap-2 min-[400px]:flex-row">*/}
            {/*  <Link href="/calculator">*/}
            {/*    <Button size="lg" className="h-12 px-8">*/}
            {/*      <FileText className="mr-2 h-5 w-5"/>*/}
            {/*      Пройти опрос*/}
            {/*    </Button>*/}
            {/*  </Link>*/}
            {/*  <Link href="#services">*/}
            {/*    <Button variant="outline" size="lg" className="h-12 px-8">*/}
            {/*      Наши услуги*/}
            {/*    </Button>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
          <div className="flex items-center justify-center">
            <Image
                src="/logo3.jpg?height=550&width=522&text=логотип"
                alt="Modern house construction"
                width={500}
                height={500}
                className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

