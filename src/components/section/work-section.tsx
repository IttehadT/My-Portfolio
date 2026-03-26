/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ChevronDown, ArrowUpRight, Image as ImageIcon } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

function LogoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Avatar className="size-8 md:size-10 border shadow ring-2 ring-border bg-muted flex-none">
      <AvatarImage 
        src={src} 
        alt={alt} 
        className="object-contain bg-background" 
      />
      <AvatarFallback className="text-xs md:text-sm font-bold text-muted-foreground">
        {alt ? alt.charAt(0).toUpperCase() : ""}
      </AvatarFallback>
    </Avatar>
  );
}

function ImageGallery({ images }: { images: any[] }) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3 mt-1.5">
      <div className="flex flex-wrap gap-2">
        {images.map((img: any, idx: number) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveImage(activeImage === img.url ? null : img.url);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all ${
              activeImage === img.url
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground hover:ring-1 hover:ring-primary/40"
            }`}
          >
            <ImageIcon className="size-3.5" />
            {img.title}
          </button>
        ))}
      </div>

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
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.work.map((work: any, id: number) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  
                  <div className="font-semibold leading-none flex flex-wrap items-center gap-2">
                    {work.href ? (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(work.href, "_blank", "noopener,noreferrer");
                        }}
                        className="group/link flex items-center gap-1 cursor-pointer"
                      >
                        <span className="group-hover/link:underline">{work.company}</span>
                        <ArrowUpRight className="size-3 text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 !rotate-0" />
                      </div>
                    ) : (
                      <span>{work.company}</span>
                    )}

                    {work.badges && work.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {work.badges.map((badge: any, idx: number) => (
                          <span
                            key={idx}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-3 hover:ring-primary/40 cursor-default"
                          >
                            {badge.name || badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* PROPOSED FIX: Location beside the title */}
                  <div className="font-sans text-sm text-muted-foreground mt-0.5">
                  <div>{work.title}</div>
                  {work.location && (
                    <div className="mt-1">{work.location}</div>
                  )}
                  </div>
                  
                  {work.description && (
                    <div className="flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors mt-1.5 w-fit group-hover:text-primary">
                      <span className="group-data-[state=open]:hidden">View Details</span>
                      <span className="hidden group-data-[state=open]:block">Hide Details</span>
                      <ChevronDown className="size-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>

          {work.images && work.images.length > 0 && (
            <div className="ml-13">
              <ImageGallery images={work.images} />
            </div>
          )}

          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground mt-2">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}