import React from 'react'

import { useTranslation } from "react-i18next";

import { PresentationChartLineIcon } from '@heroicons/react/24/outline'

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ProjectBigCard from '../components/ProjectBigCard';

export const Showcase = () => {

    const { i18n } = useTranslation()

    const containerRef = useRef(null);

    const triggerSectionRef = useRef(null);

    useGSAP(() => {
        const section = triggerSectionRef.current;
        const color = section?.dataset.color;

        if (!section || !color) return;

        gsap.registerPlugin(ScrollTrigger);

        gsap.to(containerRef.current, {
            backgroundColor: color,
            scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top top',
                scrub: true,
                invalidateOnRefresh: true,
                duration: 2.5,
                ease: "power1.out",
            },
        });

        const cards = gsap.utils.toArray('.gsap-reveal-card', containerRef.current);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set(cards, { autoAlpha: 1, y: 0 });
            return;
        }

        cards.forEach((card) => {
            gsap.fromTo(card,
                { autoAlpha: 0, y: 40 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        once: true,
                    },
                },
            );
        });
    }, { scope: containerRef });


    const projects = i18n.t("projects", {
        ns: "projects",
        returnObjects: true
    })

    return (
        <div ref={containerRef} style={{ backgroundColor: '#eff5f6' }} className="bg-alice-blue-50 pt-20">

            <section
                ref={triggerSectionRef}
                id="showcase"
                className="relative min-h-svh w-full overflow-hidden py-12"
                data-color="#0d1617"
                data-color-out="#eff5f6"
            >
                <div className='px-12'>

                    <div
                        className="title-section flex gap-4 border-b border-alice-blue-400 md:mx-auto"
                    >
                        <PresentationChartLineIcon
                            slot="title-icon"
                            className="h-6 w-6 md:h-10 md:w-10 text-alice-blue-400"
                        />

                        <h2
                            className="text-xl font-extralight uppercase text-alice-blue-400 font-mono md:text-3xl"
                        >
                            {i18n.t("showcase-label")}
                        </h2>
                    </div>
                </div>

                <div className="mt-5 grid w-full grid-cols-1 gap-5 px-6 md:mt-10 md:grid-cols-2 md:gap-6 md:px-12 xl:grid-cols-3">
                    {Array.isArray(projects) && projects.map((project, i) => (
                        <ProjectBigCard
                            key={i}
                            title={project.title}
                            description={project.description}
                            category={project.category}
                            year={project.year}
                            href={project.href}
                            image={project.image}
                        />
                    ))}
                </div>
            </section>

        </div>
    )
}
