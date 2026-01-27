import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { Section } from './section';
import { data } from '@/lib/data';

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      icon={<GraduationCap className="h-6 w-6" />}
      className="bg-card"
    >
      <div className="space-y-6">
        {data.education.map((edu, index) => (
          <Card key={index} className="transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <CardTitle>{edu.degree}</CardTitle>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
              <CardDescription>{edu.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-medium text-primary">{edu.gpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
