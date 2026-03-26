import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function HobbiesSection() {
    return (
        <section id="hobbies">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">Interests</span>
                        </div>
                        <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Hobbies</h2>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-[800px] mx-auto auto-rows-fr w-full">
                    {(DATA as any).hobbies.map((hobby: string, id: number) => (
                        <BlurFade key={hobby} delay={BLUR_FADE_DELAY * 20 + id * 0.05} className="h-full">
                            <div className="flex items-center justify-center border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all rounded-xl p-4 h-full text-center">
                                <span className="font-bold text-sm">{hobby}</span>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}