import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';
import { ArrowUpRight, Award } from 'lucide-react';
import Link from 'next/link';
import { Section } from './section';

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Training & Certifications"
      icon={<Award className="h-6 w-6" />}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.certifications.map((cert, index) => (
          <Card key={index} className="flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">{cert.title}</CardTitle>
              <CardDescription>{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">{cert.date}</Badge>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" size="sm">
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
