# Vercelignore Bug

### Expected behaviour

When deploying with Vercel GitHub integration, Vercel should not upload the
directories listed in [./.vercelignore](./.vercelignore) and therefore none of
the code in those directories can be run during build time or runtime.

### Actual behaviour

Build fails due to type error in file
[./email-templates/index.ts](./email-templates/index.ts), despite the fact
`/email-templates/` is in [./.vercelignore](./.vercelignore)

https://vercel.com/worthwhile/vercelignore-bug/FnnzvLkASjtMGB3AAUGQH1c7ZuWw

```bash
22:13:21.793  	Failed to compile.
22:13:21.794  	./email-templates/index.ts:1:21
22:13:21.794  	Type error: Cannot find module './sensitive-info' or its corresponding type declarations.
22:13:21.794  	> 1 | import secrets from "./sensitive-info"
```
