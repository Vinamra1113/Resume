import { Award } from 'lucide-react';
import { Section } from './section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { data } from '@/lib/data';

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements & Recognition"
      icon={<Award className="h-6 w-6" />}
      className="bg-card"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.achievements.map((achievement, index) => (
          <Card key={index} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">{achievement.title}</CardTitle>
                <Badge variant="secondary" className="whitespace-nowrap">{achievement.year}</Badge>
              </div>
              <CardDescription className="pt-2">{achievement.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
