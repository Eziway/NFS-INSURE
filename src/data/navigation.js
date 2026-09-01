/**
 * Navigation menu structure for the NFS Insure website.
 * Used by AppNavbar.vue to render nav links and mega-menu dropdowns.
 */

export const navLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'FAQ',
    to: '/faq',
  },
  {
    label: 'Solutions',
    id: 'solutions',
    children: [
      {
        category: 'Insurance & Risk',
        items: [
          {
            label: 'Risk Cover',
            description: 'Life, critical illness & disability',
            icon: 'fas fa-umbrella',
            to: '/risk-cover',
          },
          {
            label: 'Short-Term Insurance',
            description: 'Motor, household & commercial',
            icon: 'fas fa-car',
            to: '/short-term-insurance',
          },
          {
            label: 'Medical Aid',
            description: 'Individual & corporate health plans',
            icon: 'fas fa-heartbeat',
            to: '/medical-aid',
          },
          {
            label: 'NFS Health',
            description: 'NFS Health Platform',
            icon: 'fas fa-notes-medical',
            to: 'https://health.nfs.insure',
            external: true,
          },
          {
            label: 'Learner Insurance',
            description: 'Student & school protection',
            icon: 'fas fa-user-graduate',
            to: '/learner-insurance',
          },
        ],
      },
      {
        category: 'Wealth & Finance',
        items: [
          {
            label: 'Savings & Investments',
            description: 'Unit trusts & investment portfolios',
            icon: 'fas fa-piggy-bank',
            to: '/savings-investments',
          },
          {
            label: 'Pension & Annuities',
            description: 'Retirement planning & preservation',
            icon: 'fas fa-chart-line',
            to: '/pension-annuities',
          },
          {
            label: 'Home Loans',
            description: 'Pre-qualification through ooba',
            icon: 'fas fa-key',
            to: '/home-loans',
          },
        ],
      },
      {
        category: 'Business & Specialised',
        items: [
          {
            label: 'Diplomatic Desk',
            description: 'Expatriate & diplomatic services',
            icon: 'fas fa-globe',
            to: '/diplomatic',
          },
          {
            label: 'SMME Funding',
            description: 'Grow your small business',
            icon: 'fas fa-store',
            to: '/smme-funding',
          },
          {
            label: 'Solar Financing',
            description: 'Fund solar for your business',
            icon: 'fas fa-solar-panel',
            to: '/solar-financing',
          },
        ],
      },
      {
        category: 'Bonds & Guarantees',
        items: [
          {
            label: 'Construction Guarantees',
            description: 'Bid bonds, performance & retention',
            icon: 'fas fa-hard-hat',
            to: '/bonds-guarantees',
          },
          {
            label: 'Customs Bonds',
            description: 'Import, export & warehouse bonds',
            icon: 'fas fa-ship',
            to: '/bonds-guarantees',
          },
          {
            label: 'Court & Fiduciary Bonds',
            description: 'Executor, trustee & curator bonds',
            icon: 'fas fa-gavel',
            to: '/bonds-guarantees',
          },
          {
            label: 'Contract & Fuel Guarantees',
            description: 'Goods, services & fuel supply',
            icon: 'fas fa-gas-pump',
            to: '/bonds-guarantees',
          },
        ],
        viewAll: {
          label: 'View All Solutions',
          to: '/services',
        },
      },
    ],
  },
  {
    label: 'Apply',
    id: 'apply',
    children: [
      {
        category: 'Applications',
        items: [
          {
            label: 'Medical Aid Quote',
            description: 'Get covered today',
            icon: 'fas fa-heartbeat',
            to: '/medical-aid-apply',
          },
          {
            label: 'SMME Funding',
            description: 'Apply for business funding',
            icon: 'fas fa-store',
            to: '/smme-apply',
          },
          {
            label: 'Home Loan',
            description: 'Apply for property finance',
            icon: 'fas fa-key',
            to: '/home-loans-apply',
          },
          {
            label: 'Diplomatic Services',
            description: 'Apply for diplomatic coverage',
            icon: 'fas fa-globe',
            to: '/diplomatic-apply',
          },
          {
            label: 'Solar Financing',
            description: 'Apply for solar funding',
            icon: 'fas fa-solar-panel',
            to: '/solar-financing-apply',
          },
        ],
      },
    ],
  },
];
