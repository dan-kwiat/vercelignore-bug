const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const INVITE_TOKENS = ["test"]

const charities = [{ id: "test-id", chcId: "123456" }]

module.exports = withBundleAnalyzer(
  withMDX({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    async redirects() {
      let arr = charities.map((x) => ({
        source: `/charity/${x.chcId}`,
        destination: `/environment/${x.id}`,
        permanent: false,
      }))
      if (process.env.VERCEL_ENV === "production") {
        const customInvites = INVITE_TOKENS.map((personalToken) => ({
          source: `/invite/${personalToken}`,
          destination: "/invite/abcde",
          permanent: false,
        }))
        arr.push(...customInvites)
      }
      return arr
    },
    async headers() {
      // https://vercel.com/docs/environment-variables#system-environment-variables
      // Make sure preview sites are not indexed by search engines:
      if (process.env.VERCEL_ENV === "production") {
        return []
      } else {
        return [
          {
            source: "/(.*)",
            headers: [
              {
                key: "x-robots-tag",
                value: "noindex",
              },
            ],
          },
        ]
      }
    },
  })
)
