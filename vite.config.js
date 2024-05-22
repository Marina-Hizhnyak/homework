// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),         // Page d'accueil
        professeurs: resolve(__dirname, 'professeurs/index.html'), // Page secondaire
        cours: resolve(__dirname, 'cours/index.html'), // Page secondaire
        contacts: resolve(__dirname, 'contacts/index.html'), // Page secondaire
      },
    },
  },
})