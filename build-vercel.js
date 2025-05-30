// Custom build script for Vercel deployment
import { execSync } from 'child_process';

// Run the build commands
console.log('🔨 Building the React frontend...');
execSync('vite build', { stdio: 'inherit' });

console.log('🔨 Building the Express API...');
execSync('esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

console.log('🔨 Copying API routes for serverless functions...');
execSync('cp -r dist/server api/', { stdio: 'inherit' });

console.log('✅ Build completed successfully!');
