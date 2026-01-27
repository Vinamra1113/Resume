import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';
import { Briefcase, Calendar } from 'lucide-react';
import { Section } from './section';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      icon={<Briefcase className="h-6 w-6" />}
      className="bg-card"
    >
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
        {data.experience.map((exp, index) => (
          <div key={index} className="relative flex items-start pl-12">
            <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Briefcase className="h-5 w-5" />
            </div>
            <Card className="w-full">
              <CardHeader>
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <CardTitle>{exp.role}</CardTitle>
                  <Badge variant="outline">{exp.organization}</Badge>
                </div>
                <div className="flex items-center text-sm text-muted-foreground pt-1">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{exp.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
