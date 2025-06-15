import React from 'react';
import { cn } from '@/lib/utils';

interface FooterLink {
  name: string
  href: string
}

interface FooterSection {
  title: string
  links: FooterLink[]
}

interface FooterProps {
  sections: FooterSection[]
  copyrightText: string
  className?: string
  logo?: React.ReactNode
  socialLinks?: React.ReactNode[]
}

export const Footer = ({
  sections,
  copyrightText,
  className,
  logo,
  socialLinks,
}: FooterProps) => {
  return (
    <footer className={cn('bg-gray-50', className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-blue-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {logo && <div className="mb-4 md:mb-0">{logo}</div>}
            <p className="text-sm text-gray-500">{copyrightText}</p>
            {socialLinks && (
              <div className="mt-4 flex space-x-6 md:mt-0">
                {socialLinks.map((link, index) => (
                  <div key={index} className="text-gray-400 hover:text-gray-500">
                    {link}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}