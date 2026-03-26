import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function LanguagesSection() {
    return (
        <section id="languages">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Communication</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Languages</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-[800px] mx-auto auto-rows-fr w-full">
                    {(DATA as any).languages.map((lang: any, id: number) => (
                        <BlurFade key={lang.name} delay={BLUR_FADE_DELAY * 18 + id * 0.05} className="h-full">
                            <div className="flex flex-col border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all rounded-xl p-4 h-full items-center justify-center text-center gap-1.5">
                                <h3 className="font-bold text-base">{lang.name}</h3>
                                <p className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-sm">{lang.proficiency}</p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}