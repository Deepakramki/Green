import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables to ensure process.env.API_KEY is available during build/runtime
  // Using '.' instead of process.cwd() to avoid TypeScript error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  }
})