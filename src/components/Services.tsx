import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND_CONFIG, SERVICES, ProjectCategory, buildMailtoHref } from '../data/portfolioData';

interface ServicesProps {
  onFilterCategory: (category: ProjectCategory) => void;
}

export function Services({ onFilterCategory }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 border-b border-[#E5E5E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-[#6B6B66] mb-2">Core Capabilities</p>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] tracking-tight mb-3">
            What I Create
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Focused creative production and digital workspace systems tailored for businesses, hospitality brands, creators, and students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#E5E5E0] rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Editorial Index & Category Match */}
                <div className="flex items-center justify-between text-xs text-[#6B6B66] pb-4 mb-5 border-b border-[#F0F0EC]">
                  <span className="font-medium text-[#171717]">{service.number}. Service Offering</span>
                  <button
                    type="button"
                    onClick={() => {
                      onFilterCategory(service.categoryMatch);
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#171717] underline underline-offset-4 transition-colors cursor-pointer"
                  >
                    Filter in Archive
                  </button>
                </div>

                <h3 className="font-serif-editorial text-2xl font-normal text-[#171717] mb-3">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-[#525252] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Examples List */}
                <div className="mb-8">
                  <p className="text-xs font-medium text-[#171717] mb-3">
                    {service.id === 'service-thumbnails' ? 'Key Design Principles:' : 'Typical Applications:'}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm text-[#525252]">
                    {service.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2">
                        <span aria-hidden="true" className="text-[#171717] font-medium">·</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-4 border-t border-[#F0F0EC] flex items-center justify-between gap-4">
                {service.ctaActionType === 'scroll' ? (
                  <a
                    href={service.targetSection}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-white bg-[#171717] rounded-xl hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={buildMailtoHref(BRAND_CONFIG.email, service.emailSubject)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-white bg-[#171717] rounded-xl hover:bg-[#2E2E2E] transition-colors whitespace-nowrap shrink-0"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{service.ctaText}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
