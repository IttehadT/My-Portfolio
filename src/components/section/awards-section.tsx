import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AwardsSection() {
    return (
        <section id="awards">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Achievements</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Honors & Awards</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[600px]">
                            Recognitions I&apos;ve received for academic excellence and extracurricular milestones.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full">
                    {(DATA as any).awards.map((award: string, id: number) => (
                        <BlurFade key={award} delay={BLUR_FADE_DELAY * 16 + id * 0.05} className="h-full">
                            <div className="flex items-center justify-center text-center border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all rounded-xl p-5 h-full">
                                <span className="font-semibold text-sm md:text-base">{award}</span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}