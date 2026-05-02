'use client';

import { useState, useEffect } from 'react';
import { data } from '@/lib/data';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Operations that produce different values on server vs client must be deferred until after hydration
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 bg-card border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {year ?? '2025'} {data.profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
