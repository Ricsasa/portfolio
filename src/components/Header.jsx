import React, { useState } from 'react'

import { useTranslation } from "react-i18next";

import {
    Button,
} from '@headlessui/react'
import { XMarkIcon, LanguageIcon } from '@heroicons/react/24/outline'



export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation()

    const urlPrefix = i18n.language === 'es-MX' ? '' : '/en-US'

    const navigation = [
        {
            name: t("summary-label"),
            href: `${urlPrefix}/#summary`
        },
        {
            name: t("showcase-label"),
            href: `${urlPrefix}/#showcase`
        },
        {
            name: t("professional-experience-label"),
            href: `${urlPrefix}/#professional-experience`
        },
        {
            name: t("skills-label"),
            href: `${urlPrefix}/#skills`
        },
        {
            name: t("education-label"),
            href: `${urlPrefix}/#education`
        },
        {
            name: t("languages-label"),
            href: `${urlPrefix}/#languages`
        },
    ]

    return (
        <header>
            <nav className="fixed top-0 z-100 w-full transition-shadow duration-300">
                <div className={`w-full backdrop-blur-3xl border-b bg-transparent border-transparent`}
                >
                    <div className={`mx-auto w-full  flex items-center justify-end px-6 gap-8 md:px-12 py-2 h-20`}
                    >
                        <button
                            className="p-3 rounded-full bg-custom-tertiary/5 hover:bg-custom-primary/10 transition-colors cursor-pointer text-custom-secondary focus:outline-none focus:ring-2 focus:ring-custom-primary/50
                            
                            "
                        >
                            <a href={i18n.language === 'es-MX' ? '/en-US' : '/'}>
                                <div className='flex text-xs md:text-base font-mono'>
                                    <LanguageIcon className="w-4 h-4 md:w-6 md:h-6" />
                                    {i18n.language === 'es-MX' ? 'Español' : ' English'}
                                </div>
                            </a>
                        </button>
                        <Button className={`group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-custom-primary/50
                                bg-custom-tertiary/10 text-custom-secondary hover:bg-custom-primary/20 
                                text-xs md:text-base font-mono`}>
                            {t("download-label")}
                        </Button>
                        <Button
                            className={`group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 font-medium transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-custom-primary/50
                                bg-custom-tertiary/10 text-custom-secondary hover:bg-custom-primary/20 `}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="text-xs md:text-base tracking-wide font-mono">Menú</span>
                        </Button>

                    </div>
                </div>
            </nav>

            {/* Overlay - Moved outside nav to avoid blur inheritance */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-110"
                />
            )}

            {/* Sidebar Drawer */}
            <aside
                className={`fixed top-0 right-0 h-full w-full sm:w-100 md:w-1/2 bg-custom-tertiary shadow-2xl z-120 transform transition-transform duration-300 ease-in-out sm:rounded-l-[32px] border-l border-custom-primary/10 flex flex-col
                ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                `}
            >
                <div className='flex justify-end items-center px-8 py-2 md:py-6 border-b border-custom-primary/10 '>

                    <Button
                        className='p-3 rounded-full hover:text-custom-secondary-tertiary/20 transition-colors cursor-pointer text-custom-secondary focus:outline-none focus:ring-2 focus:ring-custom-primary/50'
                        onClick={() => setIsOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <XMarkIcon className="w-8 h-8 md:w-10 md:h-10" />
                    </Button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-8">

                    <nav className="flex flex-col space-y-4">
                        {navigation.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="px-4 py-2 rounded-2xl text-xl md:text-3xl font-extralight font-mono tracking-wide text-custom-secondary hover:bg-custom-secondary/20 transition-colors duration-200 uppercase"
                                title={item.name}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>
        </header>
    )
}
