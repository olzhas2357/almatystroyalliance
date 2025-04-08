import Link from "next/link"
import { Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import VideoSection from "@/components/video-section"
import GallerySection from "@/components/gallery-section"
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function HomePage() {
  return (
      <main className="flex min-h-screen flex-col">
          <Navbar/>
          <HeroSection/>

          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
              <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                      <div className="space-y-2">
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                              Хотите узнать стоимость строительства?
                          </h2>
                          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl ">
                              Оставьте заявку, и мы рассчитаем смету бесплатно!
                          </p>
                          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl ">
                              Ответьте на несколько вопросов, и мы свяжемся с вами для обсуждения строительства
                          </p>
                      </div>
                      <div className="space-y-4">
                          <Link href="/calculator">
                              <Button size="lg" className="h-12 px-8">
                                  <Calculator className="mr-2 h-5 w-5"/>
                                  Пройти опрос
                              </Button>
                          </Link>
                          <div>
                              <p className="text-sm text-muted-foreground mb-2">Или свяжитесь с нами напрямую:</p>
                              <a
                                  href="https://wa.me/77785555016"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-green-500 text-white hover:bg-green-600 h-10 py-2 px-4"
                              >
                                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                      <path
                                          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                  </svg>
                                  Написать в WhatsApp
                              </a>

                          </div>
                      </div>


                  </div>
              </div>
          </section>
          <AboutSection/>
          <ServicesSection/>
          <VideoSection/>
          {/*<GallerySection/>*/}
          <TestimonialsSection/>
          <div className="map-container">
              <h3>Как нас найти:</h3>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1646.1652647967644!2d76.96268688436716!3d43.228026265799656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f0779242177%3A0x3dff17f3c2ca9509!2sAlem%20Technologies%20Office!5e1!3m2!1sen!2skz!4v1744139344616!5m2!1sen!2skz"
                  width="100%"
                  height="400"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
          </div>
      </main>
)
}

