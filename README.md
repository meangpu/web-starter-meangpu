# web-starter-meangpu

need to add 3 thing

### first

add basename="/reposName/" into router also // in `app.jsx` component
<BrowserRouter basename='/web-starter-meangpu/'>

### second

Fortunately, there is a very easy fix for this. Add the following line in **vite.config.js**:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
+  base: '/vite-deploy-demo/'
})

```

### NotNeed?

```json
"homepage": "https://meangpu.github.io/",
```

to `package.json`

---

### betterbuild

add this line to `vite.config.js` to make it build to another folder

```js
  build: {
    outDir: "../docs",
  },
```

decided to create template for easier life make it contain

- navbar
- router
- Datafetch
- hero section
