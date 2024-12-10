import { AnalyticsEvent, AnalyticsPageView } from '../types/analytics';

export const GA_TRACKING_ID = 'G-FBGZSHV6KC';

export const pageview = ({ url }: AnalyticsPageView): void => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: AnalyticsEvent): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};