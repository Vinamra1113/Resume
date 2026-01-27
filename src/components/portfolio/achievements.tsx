import { Award } from 'lucide-react';
import { Section } from './section';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { data } from '@/lib/data';
import Link from 'next/link';

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements & Recognition"
      icon={<Award className="h-6 w-6" />}
      className="bg-card"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.achievements.map((achievement, index) => (
          <Link key={index} href={achievement.url} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="flex flex-col h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{achievement.title}</CardTitle>
                {achievement.description && (
                  <CardDescription className="pt-2">{achievement.description}</CardDescription>
                )}
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
