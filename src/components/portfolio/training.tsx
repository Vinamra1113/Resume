import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';
import { Award, ArrowUpRight } from 'lucide-react';
import { Section } from './section';
import Link from 'next/link';

export function Training() {
  return (
    <Section
      id="training"
      title="Training"
      icon={<Award className="h-6 w-6" />}
      className="bg-card"
    >
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {data.training.map((t, index) => (
          <Card key={index} className="flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">{t.title}</CardTitle>
              <CardDescription>{t.issuer}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className='text-muted-foreground'>{t.description}</p>
                <div className='flex flex-wrap gap-2'>
                    <Badge variant="secondary">{t.date}</Badge>
                    {t.certificateId && <Badge variant="outline">ID: {t.certificateId}</Badge>}
                </div>
            </CardContent>
            {t.url && t.url !== '#' && (
              <CardFooter>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={t.url} target="_blank" rel="noopener noreferrer">
                    View Certificate <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
