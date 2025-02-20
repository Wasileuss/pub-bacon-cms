import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

const serviceAccountPath = process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY;

// Перевіряємо, чи існує шлях до файлу
if (!fs.existsSync(serviceAccountPath)) {
  throw new Error("Firebase service account JSON file not found!");
}

// Зчитуємо вміст JSON файлу
const serviceAccount = JSON.parse(fs.readFileSync(path.resolve(serviceAccountPath), 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

export { db };
