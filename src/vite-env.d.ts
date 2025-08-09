/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MW_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
