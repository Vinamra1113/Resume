import { Target } from 'lucide-react';
import { Section } from './section';
import { Card, CardContent } from '@/components/ui/card';
import { data } from '@/lib/data';

export function CareerObjective() {
  return (
    <Section
      id="objective"
      title="Career Objective"
      icon={<Target className="h-6 w-6" />}
    >
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {data.careerObjective}
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
