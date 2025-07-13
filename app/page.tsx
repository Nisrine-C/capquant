'use client';

import Analytics from '@/components/Analytics';
import Dashboard from '@/components/Dashboard';
import ExecutionEngine from '@/components/ExecutionEngine';
import { Features } from '@/components/Features';
import Header from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import PlatformVideo from '@/components/PlatformVideo';
import StandalonePythonCodeBackground from '@/components/StandalonePythonCodeBackground';
import { Stats } from '@/components/Stats';
import { Footer } from '@/components/Footer';
import StrategyBuilder from '@/components/StrategyBuilder';
import { Waitlist } from '@/components/Waitlist';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <StandalonePythonCodeBackground />
      <Header />
      <Hero />
      <PlatformVideo />
      <StrategyBuilder />
      <Analytics />
      <ExecutionEngine />
      <Features />
      <Waitlist />
      <Footer />
    </div>
  );
}
