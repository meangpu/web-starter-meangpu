# web-starter-meangpu

need to add 2 thing

```
"homepage": "https://meangpu.github.io/",
```

to **package.json**

---

Fortunately, there is a very easy fix for this. Add the following line in **vite.config.js**:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
+  base: '/vite-deploy-demo/'
})

```

decided to create template for easier life make it contain

- navbar
- router
- Datafetch
- hero section
