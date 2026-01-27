import { Section } from './section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { data } from '@/lib/data';
import { ThumbsUp, Star, Languages as LanguagesIcon, Heart } from 'lucide-react';

export function OtherSections() {
  return (
    <>
      <Section id="soft-skills" title="Soft Skills" icon={<ThumbsUp className="h-6 w-6" />}>
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-wrap gap-2">
            {data.softSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Section>
      <Section id="additional-skills" title="Additional Skills" icon={<Star className="h-6 w-6" />} className="bg-card">
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-wrap gap-2">
            {data.additionalSkills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-base px-4 py-2">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Section>
      <Section id="languages" title="Languages" icon={<LanguagesIcon className="h-6 w-6" />}>
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-wrap gap-2">
            {data.languages.map((lang) => (
              <Badge key={lang} variant="secondary" className="text-base px-4 py-2">
                {lang}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Section>
      <Section id="interests" title="Interests" icon={<Heart className="h-6 w-6" />} className="bg-card">
        <Card className="shadow-lg">
          <CardContent className="p-6 flex flex-wrap gap-2">
            {data.interests.map((interest) => (
              <Badge key={interest} variant="secondary" className="text-base px-4 py-2">
                {interest}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
