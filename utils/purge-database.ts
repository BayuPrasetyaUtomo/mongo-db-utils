import db from "../config.ts"; // Your mongo db connection

const collections = await db.collections();

// collection you want to skip
const skip = ["collA", "collB"];

for (const collection of collections) {
  if (skip.find((v) => v !== collection.collectionName)) {
    await db.collection(collection.collectionName).drop();
    console.log(`Dropped collection: ${collection.collectionName}`);
  } else {
    console.log(`Skipped collection: ${collection.collectionName}`);
  }
}
