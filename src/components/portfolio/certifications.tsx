import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';
import { ArrowUpRight, Award, Crown } from 'lucide-react';
import Link from 'next/link';
import { Section } from './section';

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      icon={<Award className="h-6 w-6" />}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
            {(cert as any).isGlobal && (
              <div className="absolute top-2 right-2 text-yellow-500">
                <Crown className="h-5 w-5 fill-current" />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-xl pr-6 flex items-start gap-2">
                {cert.title}
              </CardTitle>
              {cert.issuer && <CardDescription>{cert.issuer}</CardDescription>}
            </CardHeader>
            {cert.date && 
              <CardContent>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </CardContent>
            }
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                  View Credential <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
