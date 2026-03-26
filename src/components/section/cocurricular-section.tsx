"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

function CoCurricularItem({ item }: { item: any }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    return (
        <div className="flex gap-4">
            <Avatar className="size-12 border bg-muted">
                <AvatarImage src={item.logoUrl} alt={item.company} className="object-contain" />
                <AvatarFallback>{item.company[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                    <div className="flex items-center gap-2">
                        {item.href ? (
                            <Link href={item.href} target="_blank" className="font-semibold leading-none hover:underline flex items-center gap-1">
                                {item.company}
                                <ArrowUpRight className="size-3 text-muted-foreground" />
                            </Link>
                        ) : (
                            <h3 className="font-semibold leading-none">{item.company}</h3>
                        )}
                    </div>
                    <div className="text-sm tabular-nums text-muted-foreground sm:text-right">
                        {item.start} - {item.end}
                    </div>
                </div>
                
                <div className="font-sans text-sm text-foreground mt-1">
                    {item.title}
                </div>

                {/* The Expand/Collapse Trigger (Only shows if a description exists) */}
                {item.description && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors mt-2 w-fit"
                    >
                        {isExpanded ? "Hide Details" : "View Details"}
                        {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                    </button>
                )}
                
                {/* The Expandable Text Area */}
                {isExpanded && item.description && (
                    <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="font-sans text-sm text-muted-foreground prose dark:prose-invert">
                            {item.description}
                        </div>
                    </div>
                )}

                {/* ALWAYS VISIBLE: Image Capsules & Viewer */}
                {item.images && item.images.length > 0 && (
                    <div className="mt-4 flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2">
                            {item.images.map((img: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(activeImage === img.url ? null : img.url)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
                                        activeImage === img.url 
                                        ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                                        : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`}
                                >
                                    <ImageIcon className="size-3.5" />
                                    {img.title}
                                </button>
                            ))}
                        </div>
                        
                        {/* The Active Image Viewer */}
                        {activeImage && (
                            <div className="mt-2 overflow-hidden rounded-xl border bg-muted animate-in fade-in zoom-in-95 duration-200">
                                <img 
                                    src={activeImage} 
                                    alt="Promotion" 
                                    className="w-full h-auto object-cover max-h-[400px]"
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function CocurricularSection() {
    return (
        <section id="cocurricular">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Leadership</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Co-Curricular Activities</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
                            My involvement in clubs, organizations, and cadet corps that have shaped my leadership and teamwork skills.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 max-w-[800px] mx-auto w-full mt-4">
                    {(DATA as any).coCurricular.map((item: any, id: number) => (
                        <BlurFade key={item.company} delay={BLUR_FADE_DELAY * 14 + id * 0.05}>
                            <CoCurricularItem item={item} />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}