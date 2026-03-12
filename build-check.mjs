import { execSync } from 'child_process';
try {
  const result = execSync('npm run build', { stdio: 'pipe', cwd: process.cwd() });
  console.log('Build output:', result.toString());
} catch (error) {
  console.log('Build failed!');
  console.log('STDOUT:', error.stdout.toString());
  console.log('STDERR:', error.stderr.toString());
}
