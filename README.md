# web-starter-meangpu

## DO THIS

### 1

change this line in `4o4.html` the only time it should be `0` is when use my default repos like `meangpu.github.io`

```js
var pathSegmentsToKeep = 1;
```

### 2

this will correct path in `addressbar`
add basename="/reposName/" into router also // in `app.jsx` component
<BrowserRouter basename='/web-starter-meangpu/'>

### 3

This will make page load and `find all asset` without this page won't even load
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

### NotNeed

not sure if will be need in some case

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
