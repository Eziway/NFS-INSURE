import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '@/lib/supabase';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue'),
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/ServicesPage.vue'),
    meta: { title: 'Our Services' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue'),
    meta: { title: 'Contact Us' },
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/FaqPage.vue'),
    meta: { title: "FAQ's" },
  },
  {
    path: '/home-loans',
    name: 'HomeLoans',
    component: () => import('@/views/HomeLoansPage.vue'),
    meta: { title: 'Home Loans' },
  },
  {
    path: '/home-loans-apply',
    name: 'HomeLoansApply',
    component: () => import('@/views/ApplyHomeLoansPage.vue'),
    meta: { title: 'Home Loans Application' },
  },
  {
    path: '/smme-funding',
    name: 'SMMEFunding',
    component: () => import('@/views/SmmeFundingPage.vue'),
    meta: { title: 'SMME Funding' },
  },
  {
    path: '/smme-apply',
    name: 'SMMEApply',
    component: () => import('@/views/ApplySmmePage.vue'),
    meta: { title: 'SMME Funding Application' },
  },
  {
    path: '/solar-financing',
    name: 'SolarFinancing',
    component: () => import('@/views/SolarFinancingPage.vue'),
    meta: { title: 'Solar Financing' },
  },
  {
    path: '/solar-financing-apply',
    name: 'SolarFinancingApply',
    component: () => import('@/views/ApplySolarPage.vue'),
    meta: { title: 'Solar Financing Application' },
  },
  {
    path: '/medical-aid',
    name: 'MedicalAid',
    component: () => import('@/views/MedicalAidPage.vue'),
    meta: { title: 'Medical Aid' },
  },
  {
    path: '/medical-aid-apply',
    name: 'MedicalAidApply',
    component: () => import('@/views/ApplyMedicalAidPage.vue'),
    meta: { title: 'Medical Aid Quote' },
  },
  {
    path: '/diplomatic',
    name: 'Diplomatic',
    component: () => import('@/views/DiplomaticDeskPage.vue'),
    meta: { title: 'Diplomatic Desk' },
  },
  {
    path: '/diplomatic-apply',
    name: 'DiplomaticApply',
    component: () => import('@/views/ApplyDiplomaticPage.vue'),
    meta: { title: 'Diplomatic Request' },
  },
  {
    path: '/risk-cover',
    name: 'RiskCover',
    component: () => import('@/views/RiskCoverPage.vue'),
    meta: { title: 'Risk Cover' },
  },
  {
    path: '/short-term-insurance',
    name: 'ShortTermInsurance',
    component: () => import('@/views/ShortTermInsurancePage.vue'),
    meta: { title: 'Short-Term Insurance' },
  },
  {
    path: '/savings-investments',
    name: 'SavingsInvestments',
    component: () => import('@/views/SavingsInvestmentsPage.vue'),
    meta: { title: 'Savings & Investments' },
  },
  {
    path: '/pension-annuities',
    name: 'PensionAnnuities',
    component: () => import('@/views/PensionAnnuitiesPage.vue'),
    meta: { title: 'Pension & Annuities' },
  },
  {
    path: '/learner-insurance',
    name: 'LearnerInsurance',
    component: () => import('@/views/LearnerInsurancePage.vue'),
    meta: { title: 'Learner Insurance' },
  },
  {
    path: '/bonds-guarantees',
    name: 'BondsGuarantees',
    component: () => import('@/views/BondsGuaranteesPage.vue'),
    meta: { title: 'Bonds & Guarantees' },
  },
  {
    path: '/admin-forgot-password',
    name: 'AdminForgotPassword',
    component: () => import('@/views/AdminForgotPasswordPage.vue'),
    meta: { title: 'Forgot Password' },
  },
  {
    path: '/admin-reset-password',
    name: 'AdminResetPassword',
    component: () => import('@/views/AdminResetPasswordPage.vue'),
    meta: { title: 'Reset Password' },
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/AdminLoginPage.vue'),
    meta: { title: 'Admin Login' },
  },
  {
    path: '/admin-dashboard',
    name: 'AdminDashboard',
    component: () => import('@/views/AdminDashboardPage.vue'),
    meta: { title: 'Admin Dashboard', requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} | NFS Insure` : 'NFS Insure';
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      next('/admin/login');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
