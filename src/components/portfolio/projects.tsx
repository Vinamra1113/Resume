import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { Section } from './section';
import { data } from '@/lib/data';

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      icon={<Code2 className="h-6 w-6" />}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.projects.map((project, index) => {
          return (
            <Card key={index} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">My Role:</h4>
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                 <p className="text-xs text-muted-foreground">{project.timeline}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.links.map((link) => (
                  <Button key={link.name} asChild variant="outline" size="sm">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name} <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
