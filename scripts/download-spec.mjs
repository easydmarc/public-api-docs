import 'dotenv/config';
import { writeFileSync, mkdirSync } from 'fs';

const url = process.env.EASYDMARC_PUBLIC_API_SPEC_URL;
if (!url) {
  console.error('EASYDMARC_PUBLIC_API_SPEC_URL env variable is not set');
  process.exit(1);
}

const response = await fetch(url);
if (!response.ok) {
  console.error(`Failed to download spec: ${response.status} ${response.statusText}`);
  process.exit(1);
}

const spec = await response.text();
mkdirSync('specs', { recursive: true });
writeFileSync('specs/easydmarc-openapi.json', spec);
console.log('Spec saved to specs/easydmarc-openapi.json');