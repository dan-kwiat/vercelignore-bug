# Vercelignore Bug

We want to keep the directory [./non-app-stuff](./non-app-stuff) in git, except
for a file within it called `sensitive-info.ts`, so we put
`/non-app-stuff/sensitive-info.ts` in [./.gitignore](./.gitignore).

The whole directory is irrelevant to the build, so we put `/non-app-stuff/` in
[./.vercelignore](./.vercelignore).

### Expected behaviour

When deploying with Vercel GitHub integration, Vercel does not upload the
directory [./non-app-stuff](./non-app-stuff) (so none of its contents can be run
during build or runtime).

### Actual behaviour

Preview deployments follow expected behaviour, but merging to main branch
results in a production build which fails due to a typescript error in
[./non-app-stuff/index.ts](./non-app-stuff/index.ts). The error is because it
tries to import `sensitive-info.ts` which wasn't uploaded to GitHub. This
shouldn't be possible because [./non-app-stuff](./non-app-stuff) shouldn't be on
the build server.
