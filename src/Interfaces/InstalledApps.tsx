export interface AppDetail {
  label: string;
  packageName: string;
  icon: string;
  firstInstallTime: number;
  lastUpdateTime: number;
}

export interface InstalledApps {
  getApps(): AppDetail[];
  getSortedApps(): AppDetail[];
}
