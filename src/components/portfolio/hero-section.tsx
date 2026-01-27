import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download, Github, Link as LinkIcon, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { data } from '@/lib/data';

const iconMap: { [key: string]: React.ElementType } = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Linktree: LinkIcon,
};

export function HeroSection() {
  const profileImage = PlaceHolderImages.find((img) => img.id === data.profile.imageId);

  return (
    <section id="home" className="relative overflow-hidden bg-card py-20 md:py-32">
       <div className="absolute inset-0 bg-accent/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Avatar className="h-32 w-32 mb-6 border-4 border-background shadow-lg">
              {profileImage && <AvatarImage src={profileImage.imageUrl} alt={profileImage.description} data-ai-hint={profileImage.imageHint} />}
              <AvatarFallback>{data.profile.initials}</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl font-headline">
              {data.profile.name}
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">{data.profile.title}</p>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{data.profile.location}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg">
                <Link href={data.profile.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" /> Download CV
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                {data.profile.socials.map((social) => {
                  const Icon = iconMap[social.name];
                  return (
                    <Button key={social.name} asChild variant="outline" size="icon">
                      <Link href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                        {Icon && <Icon className="h-5 w-5" />}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
            
             <div className="mt-8 pt-6 border-t border-border/50 w-full max-w-md">
                <div className="space-y-2 text-sm text-muted-foreground">
                     <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4"/>
                        <a href={`mailto:${data.profile.email}`} className="hover:text-primary">{data.profile.email}</a>
                     </div>
                     <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4"/>
                        <a href={`tel:${data.profile.phone.replace(/ /g, '')}`} className="hover:text-primary">{data.profile.phone}</a>
                     </div>
                </div>
            </div>

          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-lg p-2 bg-background/50 backdrop-blur-sm shadow-2xl border border-accent/50">
                <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Showcase Area</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
