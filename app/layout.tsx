import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'GO.HO | Thiết kế kiến trúc & thi công trọn gói cao cấp',
  description: 'GO.HO đồng hành từ concept đến hoàn thiện, kiến tạo không gian sống hiện đại, tối ưu công năng và giá trị bền vững.',
  metadataBase: new URL('https://goho.vn'),
  openGraph: {
    title: 'GO.HO | Thiết kế kiến trúc & thi công trọn gói cao cấp',
    description: 'GO.HO đồng hành từ concept đến hoàn thiện, kiến tạo không gian sống hiện đại, tối ưu công năng và giá trị bền vững.',
    type: 'website',
    url: 'https://goho.vn',
    siteName: 'GO.HO',
    images: [{ url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&q=75&fit=crop&w=1200&h=630', width: 1200, height: 630, alt: 'GO.HO architectural story' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GO.HO | Thiết kế kiến trúc & thi công trọn gói cao cấp',
    description: 'GO.HO đồng hành từ concept đến hoàn thiện, kiến tạo không gian sống hiện đại, tối ưu công năng và giá trị bền vững.'
  }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'GO.HO cung cấp những dịch vụ nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Thiết kế kiến trúc, thi công xây dựng, nội thất cao cấp và thi công trọn gói cho công trình dân dụng và nhà ở cao cấp.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quy trình làm việc của GO.HO như thế nào?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Khởi đầu bằng tư vấn, tiếp nối concept, thiết kế, báo giá, thi công và bàn giao nhằm đảm bảo tiến độ và giá trị lâu dài.'
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
        <script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </body>
    </html>
  );
}
