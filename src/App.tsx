/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import DashboardResults from "./components/DashboardResults";
import Community from "./components/Community";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import EventsCalendar from "./components/EventsCalendar";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-gray-100 flex flex-col font-sans selection:bg-brand-neon selection:text-white antialiased">
      {/* Dynamic interactive header nav */}
      <Header />

      {/* Main core layout segments */}
      <main className="flex-grow">
        {/* Fullscreen premium video hero */}
        <Hero />

        {/* Custom illuminated differentiator card grid */}
        <WhyChooseUs />

        {/* Dashboard fitness tracking & pace simulator tool */}
        <DashboardResults />

        {/* High energy team photos gallery */}
        <Community />

        {/* Emotionally narrative athlete testimonials */}
        <Testimonials />

        {/* Dynamic Starter, Performance, Elite tier selections */}
        <Plans />

        {/* Synchronized fitness events & rsvp agenda tool */}
        <EventsCalendar />

        {/* Concluding speedline gradient click trigger */}
        <CTASection />
      </main>

      {/* Global contacts and social listings foot */}
      <Footer />
    </div>
  );
}
