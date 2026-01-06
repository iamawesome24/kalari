"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Loading from "@/components/loading";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const media = [
    { type: "image", src: "/gallery/image-5.jpeg" },
    { type: "video", src: "/gallery/video-1.mp4" },
    { type: "image", src: "/gallery/image-6.jpeg" },

    { type: "image", src: "/gallery/image-2.jpeg" },
    { type: "image", src: "/gallery/image-3.jpeg" },

    { type: "image", src: "/gallery/image-4.jpeg" },
    { type: "video", src: "/gallery/video-6.mp4" },

    { type: "image", src: "/gallery/image-1.jpeg" },
    { type: "video", src: "/gallery/video-3.mp4" },

    { type: "video", src: "/gallery/video-4.mp4" },

    { type: "image", src: "/gallery/image-7.jpeg" },
    { type: "video", src: "/gallery/video-5.mp4" },

    { type: "image", src: "/gallery/image-8.jpeg" },

    { type: "video", src: "/gallery/video-2.mp4" },

    { type: "image", src: "/gallery/image-9.jpeg" },
    { type: "image", src: "/gallery/image-10.jpeg" },
    { type: "video", src: "/gallery/video-7.mp4" },

    { type: "image", src: "/gallery/image-11.jpeg" },
  ];

  const prev = () => setIndex((i) => (i === 0 ? media.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === media.length - 1 ? 0 : i + 1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-amber-50/70 border-b border-amber-300 shadow-lg">
        <div className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 flex items-center justify-center font-bold text-xl text-white shadow-xl shadow-amber-400/50 ring-2 ring-amber-300 overflow-hidden">
                {/* Logo Image - Replace with your actual logo */}
                <Image
                  src="/logo.png"
                  alt="Ayodhyam Kalaripayattu Academy Logo"
                  width={64}
                  height={64}
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML = "AK";
                    }
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300/30 to-transparent animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Ayodhyam Kalaripayattu Academy
              </h1>
              <p className="text-xs text-amber-600/80 font-medium">
                Mind & Body Exercise
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918149306531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold shadow-lg shadow-amber-400/40 border border-amber-400/50 rounded-md transition-all duration-300 hover:scale-105"
          >
            Enroll Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-center overflow-hidden">
        <div className="relative min-h-screen flex items-center h-full overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/background.jpeg')" }}
          />

          {/* RIGHT → LEFT FADE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-transparent" />

          {/* SUBTLE WARM COLOR WASH */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-orange-900/10 to-red-900/20" />

          {/* CONTENT - TOP RIGHT, shifted slightly left and down */}
          <div
            className="
              absolute top-28
              left-1/2 -translate-x-1/2
              text-center
              z-10 max-w-lg
              md:left-auto md:translate-x-0 md:right-16 md:text-right
            "
          >
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-amber-100 drop-shadow-lg"
            >
              Kalaripayattu
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-amber-200 mt-3 leading-snug drop-shadow"
            >
              <span className="font-semibold text-amber-100 whitespace-nowrap">
                The Mother of All Martial Arts
              </span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-amber-300 italic mt-1 drop-shadow"
            >
              Strength of mind is more important than strength of body
            </motion.p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto relative">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-20 w-32 h-32 opacity-10 bg-amber-300/20 rounded-full blur-3xl"
            animate={{
              rotate: [0, 360],
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent py-2"
          >
            About Kalaripayattu
          </motion.h2>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p className="text-slate-800">
              Kalaripayattu is one of the oldest living traditions of martial
              training, physical culture, and self-defense in the world. It
              originated in Kerala, the southernmost state of India.
            </p>
            <p className="text-slate-800">
              The word{" "}
              <strong className="text-amber-600 font-semibold">Kalari</strong>{" "}
              means the sacred place where knowledge is imparted, and{" "}
              <strong className="text-amber-600 font-semibold">Payattu</strong>{" "}
              means practice or exercise. Together, they form a complete system
              of physical, mental, and spiritual development.
            </p>
            <p className="text-slate-800">
              According to tradition, the epic hero{" "}
              <strong className="text-amber-600 font-semibold">
                Lord Parashurama
              </strong>
              , an incarnation of Lord Vishnu, is believed to be the founder of
              this ancient martial art.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Styles */}
      <section className="py-20 bg-gradient-to-b from-amber-100/50 via-orange-100/50 to-red-100/50 px-6 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_70%)]"></div>

        {/* Floating Animated Elements */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-amber-400/30 rounded-full"
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent py-2"
          >
            Styles of Kalaripayattu
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-amber-50 border-amber-300/60 shadow-xl shadow-amber-200/50 hover:border-amber-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-300/60 hover:-translate-y-1 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 flex-1 flex flex-col">
                    <motion.div
                      className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-700">
                      Vadakkan (Northern Style)
                    </h3>
                    <p className="text-slate-700 leading-relaxed flex-1">
                      Emphasizes powerful strikes, dynamic footwork, acrobatics,
                      and extensive weapon training including swords, spears,
                      and shields.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-amber-50 border-amber-300/60 shadow-xl shadow-amber-200/50 hover:border-amber-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-300/60 hover:-translate-y-1 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 flex-1 flex flex-col">
                    <motion.div
                      className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-700">
                      Thekkan (Southern Style)
                    </h3>
                    <p className="text-slate-700 leading-relaxed flex-1">
                      Known for fluidity, grace, flexibility, breath control,
                      meditation, and internal energy cultivation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-amber-50 border-amber-300/60 shadow-xl shadow-amber-200/50 hover:border-amber-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-300/60 hover:-translate-y-1 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="p-8 flex-1 flex flex-col">
                    <motion.div
                      className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-700">
                      Madhya Kerala (Central Style)
                    </h3>
                    <p className="text-slate-700 leading-relaxed flex-1">
                      A balanced hybrid system integrating power and finesse
                      from northern and southern traditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/30 via-orange-100/20 to-amber-100/30"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent py-2"
          >
            Gallery
          </motion.h2>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
            {/* Image */}
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="relative h-[70vh] bg-black rounded-lg"
            >
              {media[index].type === "image" ? (
                <Image
                  src={media[index].src}
                  alt="Gallery media"
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <video
                  src={media[index].src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                />
              )}
            </motion.div>

            {/* Left toggle */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black"
            >
              <ChevronLeft />
            </button>

            {/* Right toggle */}
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white hover:bg-black"
            >
              <ChevronRight />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center md:text-left bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Instructor
          </h2>

          <Card className="bg-amber-50 border-amber-300/60 shadow-2xl shadow-amber-200/50">
            <CardContent className="p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-8 md:gap-10 items-center">
                {/* Image */}
                <div className="md:col-span-1 flex justify-center">
                  <motion.div
                    className="relative aspect-square w-40 sm:w-56 md:w-full rounded-lg overflow-hidden shadow-lg border-4 border-amber-200"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/mihir.png"
                      alt="Mihir Raut - Kalaripayattu Instructor"
                      fill
                      className="object-cover"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
                {/* Content */}
                <div className="md:col-span-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Bio */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-amber-700 text-center md:text-left">
                        Mihir Raut
                      </h3>
                      <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4 mx-auto md:mx-0"></div>
                      <p className="text-slate-700 leading-relaxed mb-4 text-center md:text-left">
                        Certified Kalaripayattu Trainer from ENS Kalari, Embram
                        Madam, Nettoor, Ernakulam District, Kerala – 682304
                      </p>
                      <p className="text-amber-700 font-medium text-center md:text-left">
                        Authorised by EN S Kalari, Nettoor, Kerala, South India
                      </p>
                    </div>
                    {/* Contact */}
                    <div className="space-y-4 mt-4 md:mt-0">
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm text-center md:text-left">
                        <p className="text-sm text-amber-700 font-semibold mb-1">
                          Phone
                        </p>
                        <p className="text-lg text-slate-800">+91 8149306531</p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm text-center md:text-left">
                        <p className="text-sm text-amber-700 font-semibold mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:mihirraut1003@gmail.com"
                          className="text-lg text-slate-800 hover:text-amber-600 transition-colors"
                        >
                          mihirraut1003@gmail.com
                        </a>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 shadow-sm">
                        <p className="text-sm text-amber-700 font-semibold mb-2 text-center md:text-left">
                          Connect With Us
                        </p>

                        <div className="flex gap-6 items-center justify-center md:justify-start">
                          <a
                            href="https://wa.me/918149306531"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg text-slate-800 hover:text-green-600 transition-colors group"
                          >
                            <svg
                              className="w-6 h-6 group-hover:scale-110 transition-transform"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            <span>WhatsApp</span>
                          </a>
                          <a
                            href="https://instagram.com/kalaripayattumihir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-lg text-slate-800 hover:text-pink-600 transition-colors group"
                          >
                            <svg
                              className="w-6 h-6 group-hover:scale-110 transition-transform"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            <span>Instagram</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gradient-to-b from-amber-100/50 via-orange-100/50 to-red-100/50 px-6 text-center relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.15),transparent_70%)]"></div>

        {/* Animated Map Pin */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-8 text-amber-600 opacity-20 hidden md:block"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent py-2"
          >
            Training Location
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block w-full max-w-2xl mx-auto p-6 md:p-8 bg-amber-50 border border-amber-300/60 rounded-lg shadow-xl shadow-amber-200/50"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)",
            }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-800 font-medium break-words leading-relaxed">
              Datta Mandir, Opposite Barometer, City Pride Road, Kothrud, Pune –
              411038
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-amber-300/50 bg-amber-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p className="mb-2">
            © {new Date().getFullYear()} Ayodhyam Kalaripayattu Academy. All
            rights reserved.
          </p>
          <p className="text-amber-600/80 text-xs">
            Preserving the ancient art of Kalaripayattu
          </p>
        </div>
      </footer>
    </main>
  );
}
