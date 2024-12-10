export interface AnalyticsEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export interface AnalyticsPageView {
  url: string;
}