'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
const m = motion as any;

const projects = [
  {
    title: 'KHÁCH SẠN HASU',
    description: 'Resort boutique với ánh sáng tự nhiên và kết cấu bê tông tinh giản.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&q=80&fit=crop&w=1600&h=1100'
  },
  {
    title: 'Trung_house',
    description: 'Nhà ở hiện đại với bản sắc kiến trúc tối giản và không gian mở.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&q=80&fit=crop&w=1200&h=1600'
  },
  {
    title: 'Biệt thự Mỹ Tho',
    description: 'Không gian nội thất ấm áp, chất liệu tự nhiên và tỉ lệ cân bằng.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&q=80&fit=crop&w=1200&h=1600'
  },
  {
    title: 'AXA Garden',
    description: 'Khu vườn đô thị riêng tư, tinh tế và kết nối thiên nhiên.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&q=80&fit=crop&w=1200&h=1600'
  },
  {
    title: 'THANKS HOUSE_Q6',
    description: 'Nhà phố sang trọng với chi tiết nội thất đậm chất craft.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&q=80&fit=crop&w=1200&h=1600'
  }
];

const services = [
  'Thiết kế kiến trúc',
  'Thi công xây dựng',
  'Nội thất cao cấp',
  'Thi công trọn gói'
];

const process = ['Tư vấn', 'Concept', 'Thiết kế', 'Báo giá', 'Thi công', 'Bàn giao'];

const testimonials = [
  {
    quote: 'GO.HO tạo ra ngôn ngữ riêng cho không gian của chúng tôi — tinh giản mà vẫn ấm cúng.',
    author: 'Gia đình Nguyễn'
  },
  {
    quote: 'Tiến độ rõ ràng, giám sát chặt chẽ và chất lượng hoàn thiện vượt kỳ vọng.',
    author: 'Chị Lan, TP.HCM'
  },
  {
    quote: 'Từ concept đến bàn giao, mọi chi tiết được xử lý rất thủ công và tinh tế.',
    author: 'Anh Nam'
  }
];

export default function Page() {
  return (
    <main className="relative overflow-x-hidden bg-paper text-ink">
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&q=80&fit=crop&w=1800&h=1200"
            alt="Architectural interior with warm materials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-between px-6 py-10 lg:px-12">
          <header className="flex items-center justify-between text-white">
            <div className="text-sm uppercase tracking-[0.35em]">GO.HO</div>
            <a href="#contact" className="text-sm uppercase tracking-[0.35em] text-white/80 transition hover:text-white">
              Liên hệ
            </a>
          </header>

          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <m.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.35em] text-white/70">Studio kiến trúc cao cấp</span>
              <h1 className="mt-8 text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Thiết kế kiến trúc & thi công trọn gói cao cấp
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-100/85 sm:text-lg">
                GO.HO đồng hành từ concept đến hoàn thiện, kiến tạo không gian sống hiện đại, tối ưu công năng và giá trị bền vững.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-slate-100">
                  Nhận tư vấn miễn phí
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm text-white/90 transition hover:border-white hover:bg-white/15">
                  Xem dự án
                </a>
              </div>
            </m.div>

            <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl text-white shadow-soft lg:w-[520px]">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">Khách hàng cao cấp</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white">Không gian sống hiện đại, tinh tế và giàu cảm xúc.</h2>
              <p className="mt-6 text-sm leading-8 text-white/70">
                Một trải nghiệm thiết kế kiến trúc được xây dựng trên chất liệu tự nhiên, tỷ lệ cân bằng và chi tiết nội thất gia công thủ công.
              </p>
            </m.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: '102+', label: 'Công trình' },
            { value: '25+', label: 'Kiến trúc sư' },
            { value: '500+', label: 'Nhân sự' },
            { value: 'Toàn quốc', label: 'Triển khai' }
          ].map((item) => (
            <m.div key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[28px] border border-black/10 bg-white/90 px-8 py-12 shadow-soft text-center">
              <p className="text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">{item.value}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-smoke">{item.label}</p>
            </m.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative overflow-hidden bg-[#f2efe9] px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-smoke">Dự án</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Một bộ sưu tập không gian kiến trúc với chiều sâu.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone">Mỗi dự án là một câu chuyện thị giác, thể hiện tỉ lệ, vật liệu và ánh sáng với tính thẩm mỹ cao.</p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-6">
              <m.article whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[40px] bg-black">
                <div className="relative h-[620px] sm:h-[720px]">
                  <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70">Featured Project</p>
                  <h3 className="mt-4 text-4xl font-semibold leading-tight">{projects[0].title}</h3>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">{projects[0].description}</p>
                </div>
              </m.article>
            </div>

            <div className="grid gap-6">
              {projects.slice(1).map((project, index) => (
                <m.article key={project.title} whileHover={{ y: -6 }} className={`group relative overflow-hidden rounded-[40px] bg-white ${index === 0 ? 'h-[320px]' : 'h-[420px]'}`}>
                  <div className="relative h-full w-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">Case study</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight">{project.title}</h3>
                  </div>
                </m.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-smoke">Dịch vụ</p>
            <h2 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Thiết kế và thi công trọn gói cho mọi không gian sang trọng.</h2>
            <p className="max-w-xl text-base leading-8 text-stone">Từ ý tưởng kiến trúc đến hoàn thiện nội thất, mỗi bước được thực hiện bằng quy trình chuyên nghiệp và tinh thần craft.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((item) => (
              <m.div key={item} whileHover={{ y: -4 }} className="group rounded-[32px] border border-black/10 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1">
                <p className="text-sm uppercase tracking-[0.35em] text-smoke">Dịch vụ</p>
                <h3 className="mt-5 text-2xl font-semibold text-ink">{item}</h3>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 bg-[#f2efe9]">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-smoke">Tại sao chọn GO.HO</p>
            <h2 className="text-4xl font-semibold leading-tight text-ink sm:text-5xl">Chuyên môn cao, tiến độ rõ ràng, giá trị lâu dài.</h2>
            <p className="max-w-xl text-base leading-8 text-stone">Đội ngũ kiến trúc sư và thực hiện của chúng tôi đảm bảo mỗi công trình vừa vận hành thực tế, vừa lưu giữ cảm hứng nghệ thuật.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              'Tối ưu công năng',
              'Kiểm soát tiến độ',
              'Chuyên môn cao',
              'Đồng hành xuyên suốt',
              'Giá trị lâu dài'
            ].map((item, index) => (
              <m.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }} className="rounded-[32px] border border-black/10 bg-white p-8 shadow-soft">
                <p className="text-xl font-semibold text-ink">{item}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-smoke">Quy trình</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Mỗi bước rõ ràng, mỗi giai đoạn được kiểm soát.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone">Quy trình của GO.HO tạo ra giá trị thực tế, đảm bảo tiến độ và chất lượng trong mọi công trình.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {process.map((step, index) => (
            <m.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-[32px] border border-black/10 bg-[#fffaf5] p-8 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-semibold text-white">{index + 1}</div>
              <h3 className="text-xl font-semibold text-ink">{step}</h3>
            </m.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 bg-[#f2efe9]">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-smoke">Lời khách hàng</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-ink sm:text-5xl">Những dòng cảm nhận từ khách hàng đã đồng hành.</h2>
          </div>
          <div className="grid gap-6">
            {testimonials.map((item, index) => (
              <m.div key={item.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.08 }} className="rounded-[32px] border border-black/10 bg-white p-10 shadow-soft">
                <p className="text-lg leading-8 text-stone">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.35em] text-smoke">{item.author}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-smoke">Bắt đầu</p>
            <h2 className="text-5xl font-semibold leading-tight text-ink sm:text-6xl">Bắt đầu công trình của bạn cùng GO.HO</h2>
            <p className="max-w-2xl text-base leading-8 text-stone">Chúng tôi lắng nghe ý tưởng, đưa ra giải pháp chuyên sâu và đồng hành trọn gói để tạo ra một không gian sống đẹp, bền và giá trị.</p>
          </div>
          <m.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="grid gap-5 rounded-[40px] border border-black/10 bg-white p-10 shadow-soft">
            <label className="grid gap-2 text-sm text-smoke">
              <span>Họ tên</span>
              <input type="text" placeholder="Nguyễn Văn A" className="rounded-3xl border border-black/10 bg-[#f8f4ee] px-5 py-4 text-base text-ink outline-none transition focus:border-black/70 focus:ring-2 focus:ring-black/10" />
            </label>
            <label className="grid gap-2 text-sm text-smoke">
              <span>Số điện thoại</span>
              <input type="tel" placeholder="0987 654 321" className="rounded-3xl border border-black/10 bg-[#f8f4ee] px-5 py-4 text-base text-ink outline-none transition focus:border-black/70 focus:ring-2 focus:ring-black/10" />
            </label>
            <label className="grid gap-2 text-sm text-smoke">
              <span>Loại công trình</span>
              <select className="rounded-3xl border border-black/10 bg-[#f8f4ee] px-5 py-4 text-base text-ink outline-none transition focus:border-black/70 focus:ring-2 focus:ring-black/10">
                <option>Nhà ở</option>
                <option>Biệt thự</option>
                <option>Khách sạn</option>
                <option>Nội thất</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-smoke">
              <span>Ngân sách dự kiến</span>
              <input type="text" placeholder="Từ 5 tỷ" className="rounded-3xl border border-black/10 bg-[#f8f4ee] px-5 py-4 text-base text-ink outline-none transition focus:border-black/70 focus:ring-2 focus:ring-black/10" />
            </label>
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#222]">Nhận tư vấn ngay</button>
          </m.form>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white px-6 py-10 text-sm text-smoke lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p>GO.HO · Thiết kế kiến trúc và thi công trọn gói cao cấp</p>
          <p>© 2026 GO.HO. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
