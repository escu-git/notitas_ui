import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
    },
    resolve: {
        alias: [
            {
                find: '@src',
                replacement: path.resolve(path.join(__dirname, '/src')),
            },
        ],
    },
})
