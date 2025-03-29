"use client"
import React, { useState } from "react";
import {ArrowLeft, Check, Send} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SelectionForm() {
    const [formData, setFormData] = useState({
        material: "brick",
        area: "150-200",
        needProject: "yes",
        needFinishing: "no",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleWhatsAppClick = () => {
        const message = encodeURIComponent(`
Выбранные параметры:
- Материал: ${formData.material === "brick" ? "Кирпич" : formData.material === "wood" ? "Дерево" : formData.material === "concrete" ? "Монолит" : "Панельный"}
- Площадь: ${formData.area === "150-200" ? "От 150 до 200 м²" : formData.area === "200-300" ? "От 200 до 300 м²" : "Более 300 м²"}
- Разработка проекта: ${formData.needProject === "yes" ? "Да" : "Нет"}
- Отделка: ${formData.needFinishing === "yes" ? "Да" : "Нет"}
    `);

        window.open(`https://wa.me/77785555016?text=${message}`, "_blank");
    };

    return (

        <div className="p-8 max-w-lg mx-auto bg-gray-300 rounded-3xl shadow-xl space-y-6 border border-gray-200">
            <Link
                href="/"
                className="inline-flex items-center mb-8 text-black hover:text-gray-700 hover:underline transition"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться на главную
            </Link>

            <h3 className="text-3xl font-bold text-center text-gray-800">Выберите параметры</h3>

            {/* Выбор параметров */}
            <div className="space-y-4 bg-gray-100 p-5 rounded-xl">

                {/* Материал */}
                <div>
                    <label className="block text-lg font-semibold text-gray-900">Материал</label>
                    <select
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none hover:border-gray-400 focus:border-primary"
                    >
                        <option value="brick">Кирпич</option>
                        <option value="wood">Дерево</option>
                        <option value="concrete">Монолит</option>
                        <option value="panel">Панельный</option>
                    </select>
                </div>

                {/* Площадь */}
                <div>
                    <label className="block text-lg font-semibold text-gray-900">Площадь</label>
                    <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none hover:border-gray-400 focus:border-primary"
                    >
                        <option value="50-150">От 50 до 150 м²</option>
                        <option value="150-300">От 150 до 300 м²</option>
                        <option value="300+">Более 300 м²</option>
                    </select>
                </div>

                {/* Разработка проекта */}
                <div>
                    <label className="block text-lg font-semibold text-gray-900">Разработка проекта</label>
                    <select
                        name="needProject"
                        value={formData.needProject}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-xl bg-white text-black focus:outline-none hover:border-gray-400 focus:border-primary"
                    >
                        <option value="yes">Да</option>
                        <option value="no">Нет</option>
                    </select>
                </div>

                {/* Отделка */}
                <div>
                    <label className="block text-lg font-semibold text-gray-900">
                        Отделка
                    </label>
                    <select
                        name="needFinishing"
                        value={formData.needFinishing}
                        onChange={handleChange}
                        className="mt-1 w-full p-3 border rounded-xl bg-gray-100 focus:outline-none text-black"
                    >
                        <option value="yes" className="text-black">Да</option>
                        <option value="no" className="text-black">Нет</option>
                    </select>
                </div>

            </div>

            {/* Выбранные параметры */}
            <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Выбранные параметры:</h3>
                <ul className="space-y-2 text-left">
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary"/>
                        <span className="font-medium text-gray-900">
              Материал: <span
                            className="font-bold text-black">{formData.material === "brick" ? "Кирпич" : formData.material === "wood" ? "Дерево" : formData.material === "concrete" ? "Монолит" : "Панельный"}</span>
            </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary"/>
                        <span className="font-medium text-gray-900">
              Площадь:<span className="font-bold text-black">
                          {formData.area === "50-150"
                              ? "От 50 до 150 м²"
                              : formData.area === "150-300"
                                  ? "От 150 до 300 м²"
                                  : "Более 300 м²"}
                        </span>
            </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary"/>
                        <span className="font-medium text-gray-900">
              Разработка проекта: <span
                            className="font-bold text-black">{formData.needProject === "yes" ? "Да" : "Нет"}</span>
            </span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary"/>
                        <span className="font-medium text-gray-900">
              Отделка: <span className="font-bold text-black">{formData.needFinishing === "yes" ? "Да" : "Нет"}</span>
            </span>
                    </li>
                </ul>
            </div>

            {/* Кнопка для отправки в WhatsApp */}
            <Button onClick={handleWhatsAppClick}
                    className="bg-green-700 text-white w-full py-4 rounded-xl text-lg font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-green-2   00 transition">
                <Send className="h-5 w-5"/>
                <span>Свяжитесь с нами</span>
            </Button>
        </div>
    );
}
