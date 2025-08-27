'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GtmPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams.toString() ? '?' + searchParams.toString() : '');
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'page_view',
          page_path: url,
        });
      }
    }
  }, [pathname, searchParams]);

  return null;
}
