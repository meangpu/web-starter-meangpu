# web-starter-meangpu

need to add 3 thing

### first

add basename="/reposName/" into router also // in `app.jsx` component
<BrowserRouter basename='/web-starter-meangpu/'>

to **package.json**

### second

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

### NotNeed?

```
"homepage": "https://meangpu.github.io/",
```

---

decided to create template for easier life make it contain

- navbar
- router
- Datafetch
- hero section
