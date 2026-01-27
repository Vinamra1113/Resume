import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { data } from '@/lib/data';
import { BarChart, Code, DollarSign, Server, Sparkles } from 'lucide-react';
import { Section } from './section';

const iconMap: { [key: string]: React.ElementType } = {
  'Data Analytics & BI': BarChart,
  'Programming & Machine Learning': Code,
  'Platforms & Tools': Server,
  'Additional Areas': DollarSign,
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      icon={<Sparkles className="h-6 w-6" />}
    >
      <div className="grid gap-8 md:grid-cols-2">
        {data.skills.map((skillCategory, index) => {
          const Icon = iconMap[skillCategory.category];
          return (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
              <CardHeader className="flex-row items-center gap-4">
                {Icon && <Icon className="h-8 w-8 text-primary" />}
                <CardTitle className="text-xl">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
