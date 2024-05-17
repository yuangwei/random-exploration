type Config = {
  title: string;
  description: string;
  domain: string;
  navs: {
    path: string;
    name: string;
  }[]
}

export default function defineConfig(config: Config) {
  return config;
}