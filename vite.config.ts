import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  server:{
    port:3040,
    proxy:{
      '/api/':{
        target:'ttps://esbtest.risen.com/dev/risen_out_management/',
        changeOrigin:true,
        secure:false,
      }
    },
    hmr:{
      overlay:false,
    }
  },
  resolve:{
    alias:{
      'vue': 'vue/dist/vue.esm-bundler.js',
     '@': join(__dirname, "src"),
    }
  },
})

