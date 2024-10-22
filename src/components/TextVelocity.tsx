"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`parallax ${className}`}>
      <motion.div
        className="scroller text-u-yellow text-2xl lg:text-3xl"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function TextVelocity() {
  return (
    <section className="bg-night py-8 ">
      <ParallaxText baseVelocity={1}>Établissement Kidoge Majagira</ParallaxText>
      <ParallaxText baseVelocity={-1}>Votre grand partenaire en Logistique</ParallaxText>
      
      {/* Services Section */}
      {/* <ParallaxText baseVelocity={2}>Flight Bookings</ParallaxText>
      <ParallaxText baseVelocity={-2}>Hotel Reservations</ParallaxText>
      <ParallaxText baseVelocity={1.5}>Tour Packages</ParallaxText>
      <ParallaxText baseVelocity={-1.5}>Visa Assistance</ParallaxText>
      <ParallaxText baseVelocity={2}>Car Rentals</ParallaxText>
      <ParallaxText baseVelocity={-2}>Travel Insurance</ParallaxText> */}
    </section>
  );
}
