export interface RootNavigationJson {
  title: string;
  devMode: boolean;
  content: NavigationItemJson[];
}

export interface NavigationItemJson {
  title: string;
  url: string;
  icon: string;
  color: string;
  params: any;
}
