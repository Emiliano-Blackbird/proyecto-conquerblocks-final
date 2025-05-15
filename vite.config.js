import { defineConfig } from "vite";
import { resolve } from 'path';

export default defineConfig({
  base: "/proyecto-conquerblocks-final/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quienessomos: resolve(__dirname, 'quienes-somos.html'),
        cursos: resolve(__dirname, 'cursos.html'),
        blog: resolve(__dirname, 'blog.html'),
        registro: resolve(__dirname, 'registro.html'),
        login: resolve(__dirname, 'login.html'),
        contacto: resolve(__dirname, 'contacto.html'),
        fullstack: resolve(__dirname, './cursos/desarrollo-full-stack.html'),
        blockchain: resolve(__dirname, './cursos/blockchain.html'),
        ia: resolve(__dirname, './cursos/inteligencia-artificial.html'),
        ciberseguridad: resolve(__dirname, './cursos/ciberseguridad.html'),
        noticia1: resolve(__dirname, './blog/noticia-1.html'),
        noticia2: resolve(__dirname, './blog/noticia-2.html'),
        avisolegal: resolve(__dirname, 'aviso-legal.html'),
      },
    },
  },
});
