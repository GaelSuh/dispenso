import type { Metadata } from 'next';
import { Downloads } from '@/components/sections/downloads';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Download',
  description: 'Get the Dispenso desktop app for Windows, macOS or Linux.',
  path: '/download',
});

export default function DownloadPage() {
  // Wrapper with extra top padding because the global Nav is fixed.
  return (
    <div className="pt-28 lg:pt-36">
      <Downloads />
    </div>
  );
}
