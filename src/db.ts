import { openDB } from 'idb';

export const dbPromise = openDB('aeris-db', 1, {
  upgrade(db) {
    db.createObjectStore('api-cache');
    db.createObjectStore('user-prefs');
  },
});

// Helper functions
export async function setCache(key: string, value: any) {
  const db = await dbPromise;
  await db.put('api-cache', value, key);
}

export async function getCache(key: string) {
  const db = await dbPromise;
  return await db.get('api-cache', key);
}
