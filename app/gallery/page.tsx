import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container px-4 py-8 md:px-6">
        <Link href="/" className="inline-flex items-center mb-8 text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться на главную
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Галерея проектов</h1>
            <p className="text-muted-foreground">
              Ознакомьтесь с нашими завершенными проектами и вдохновитесь для создания своего идеального дома
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg group">
                <div className="relative">
                  <img
                    src={`/placeholder.svg?height=400&width=600&text=Проект+${i + 1}`}
                    alt={`Проект ${i + 1}`}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">Подробнее</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Проект {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                  Место, Год
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

