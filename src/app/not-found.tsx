import Link from "next/link";
import Button from '@/components/common/Button';

export default function Custom404() {
  return (
    <div className="container mx-auto my-12 py-12 text-center"  >
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">The page you're looking for doesn't exist.</p>
      <p className="text-lg mb-6">It happens to us all... even to the best of us.</p>
      <Link href="/"><Button>Go Back Home</Button></Link>
    </div>
  );
}