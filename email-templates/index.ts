import secrets from "./sensitive-info"

async function test() {
  console.log(`Found ${secrets.arr.length} secrets`)
}

test()
