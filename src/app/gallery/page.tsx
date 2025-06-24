"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.scss";

const galleryImages = [
  // {
  //   id: 3,
  //   src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   alt: "Vacation Together",
  //   category: "travel",
  //   width: 1,
  //   height: 2,
  // },
  {
    id: 1,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.27_AM_c03ffi.jpg",
    alt: "Engagement Photo",
    category: "engagement",
    width: 1,
    height: 1,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.28_AM_gntach.jpg",
    alt: "Engagement Photo",
    category: "engagement",
    width: 1,
    height: 1,
  },
  // {
  //   id: 5,
  //   src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   alt: "Wedding Planning",
  //   category: "wedding",
  //   width: 2,
  //   height: 1,
  // },

  {
    id: 2,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772000/WhatsApp_Image_2025-06-24_at_2.27.06_PM_1_v0cgho.jpg",
    alt: "",
    category: "dating",
    width: 1,
    height: 1,
  },
  // {
  //   id: 6,
  //   src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  //   alt: "Family Gathering",
  //   category: "family",
  //   width: 1,
  //   height: 1,
  // },
  // {
  //   id: 7,
  //   src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   alt: "Holiday Celebration",
  //   category: "travel",
  //   width: 1,
  //   height: 1,
  // },
  // {
  //   id: 8,
  //   src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  //   alt: "Wedding Venue Visit",
  //   category: "wedding",
  //   width: 2,
  //   height: 2,
  // },
  // {
  //   id: 9,
  //   src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   alt: "Dress Shopping",
  //   category: "wedding",
  //   width: 1,
  //   height: 1,
  // },
  {
    id: 10,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772003/WhatsApp_Image_2025-06-24_at_2.27.05_PM_1_zsxxao.jpg",
    alt: "",
    category: "celebration",
    width: 1,
    height: 1,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772003/WhatsApp_Image_2025-06-24_at_2.27.06_PM_z8oc1e.jpg",
    alt: "",
    category: "celebration",
    width: 1,
    height: 1,
  },
  // {
  //   id: 12,
  //   src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  //   alt: "Wedding Rehearsal",
  //   category: "wedding",
  //   width: 1,
  //   height: 1,
  // },
  {
    id: 13,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750764851/WhatsApp_Image_2025-06-24_at_12.28.08_PM_j4pgai.jpg",
    alt: "Proposal Moment",
    category: "engagement",
    width: 1,
    height: 1,
  },

  {
    id: 14,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.32_AM_zaq2g3.jpg",
    alt: "Engagement Photo",
    category: "engagement",
    width: 1,
    height: 1,
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750763652/WhatsApp_Image_2025-06-24_at_10.10.30_AM_krfrvk.jpg",
    alt: "Engagement Photo",
    category: "engagement",
    width: 1,
    height: 1,
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772000/WhatsApp_Image_2025-06-24_at_2.26.31_PM_ndth5b.jpg",
    alt: "",
    category: "dating",
    width: 1,
    height: 1,
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772001/WhatsApp_Image_2025-06-24_at_2.27.08_PM_cmu2gl.jpg",
    alt: "",
    category: "dating",
    width: 1,
    height: 1,
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772002/WhatsApp_Image_2025-06-24_at_2.27.07_PM_1_vxpekk.jpg",
    alt: "",
    category: "dating",
    width: 1,
    height: 1,
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dwozuizmv/video/upload/v1750772019/WhatsApp_Video_2025-06-24_at_2.27.04_PM_j4hw0k.mp4",
    alt: "",
    video: true,
    category: "dating",
    width: 1,
    height: 1,
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dwozuizmv/video/upload/v1750772782/WhatsApp_Video_2025-06-24_at_2.37.02_PM_abouuf.mp4",
    alt: "",
    video: true,
    category: "celebration",
    width: 1,
    height: 1,
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750772001/WhatsApp_Image_2025-06-24_at_2.27.07_PM_nre0x7.jpg",
    alt: "",
    category: "dating",
    width: 1,
    height: 1,
  },

  {
    id: 22,
    src: "https://res.cloudinary.com/dwozuizmv/video/upload/v1750773580/WhatsApp_Video_2025-06-24_at_2.48.40_PM_fsammo.mp4",
    alt: "",
    video: true,
    category: "celebration",
    width: 1,
    height: 1,
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dwozuizmv/video/upload/v1750773566/WhatsApp_Video_2025-06-24_at_2.48.41_PM_ewy6jb.mp4",
    alt: "Engagement",
    video: true,
    category: "engagement",
    width: 1,
    height: 1,
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/dwozuizmv/image/upload/v1750773547/WhatsApp_Image_2025-06-24_at_2.48.41_PM_zailfl.jpg",
    alt: "Engagement",
    category: "engagement",
    width: 1,
    height: 1,
  },
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "engagement", name: "Engagement" },
  { id: "dating", name: "Dating" },
  { id: "celebration", name: "Celebration" },
  { id: "wedding", name: "Wedding" },
  { id: "travel", name: "Travel" },
  { id: "family", name: "Family" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [videoThumbnails, setVideoThumbnails] = useState<{
    [key: number]: string;
  }>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate video thumbnails
  useEffect(() => {
    const generateThumbnails = async () => {
      const thumbnails: { [key: number]: string } = {};

      for (const image of galleryImages) {
        if (image.video) {
          try {
            const video = document.createElement("video");
            video.crossOrigin = "anonymous";
            video.muted = true;
            video.src = image.src;

            await new Promise((resolve, reject) => {
              video.addEventListener("loadeddata", resolve);
              video.addEventListener("error", reject);
              video.load();
            });

            // Seek to 1 second to get a good frame
            video.currentTime = 1;

            await new Promise((resolve) => {
              video.addEventListener("seeked", resolve);
            });

            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              thumbnails[image.id] = canvas.toDataURL("image/jpeg", 0.8);
            }
          } catch (error) {
            console.error(
              "Error generating thumbnail for video:",
              image.id,
              error
            );
          }
        }
      }

      setVideoThumbnails(thumbnails);
    };

    generateThumbnails();
  }, []);

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      const currentIndex = filteredImages.findIndex(
        (img) => img.id === selectedImage.id
      );
      const prevIndex =
        (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <div className={styles.galleryPage}>
      {/* Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <h2>Oluwaseun & Lateefah</h2>
            </Link>
          </div>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/wedding-party" className={styles.navLink}>
              Wedding Party
            </Link>
            <Link
              href="/gallery"
              className={`${styles.navLink} ${styles.active}`}
            >
              Gallery
            </Link>
            <Link href="/rsvp" className={styles.navLink}>
              RSVP
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            A collection of our precious moments together
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.container}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.filterButton} ${
                  selectedCategory === category.id ? styles.active : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          {filteredImages.length > 0 ? (
            <motion.div className={styles.galleryGrid} layout>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${styles.galleryItem} ${
                    styles[`span${image.width}`]
                  } ${styles[`span${image.height}`]}`}
                  onClick={() => openLightbox(image)}
                >
                  <div className={styles.imageContainer}>
                    {image.video ? (
                      <div className={styles.videoContainer}>
                        {videoThumbnails[image.id] ? (
                          <div
                            className={styles.videoThumbnail}
                            style={{
                              backgroundImage: `url(${
                                videoThumbnails[image.id]
                              })`,
                            }}
                          />
                        ) : (
                          <div className={styles.videoThumbnailPlaceholder}>
                            <span>Loading...</span>
                          </div>
                        )}
                        <video
                          src={image.src}
                          className={styles.hiddenVideo}
                          muted
                          loop
                          onMouseEnter={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            video.play();
                          }}
                          onMouseLeave={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            video.pause();
                            video.currentTime = 0;
                          }}
                        />
                        <div className={styles.playButton}>
                          <span>▶</span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={styles.imageBackground}
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                    )}
                    <div className={styles.imageOverlay}>
                      <div className={styles.imageInfo}>
                        <h3>{image.alt}</h3>
                        <p>
                          {
                            categories.find((cat) => cat.id === image.category)
                              ?.name
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.comingSoon}
            >
              <div className={styles.comingSoonContent}>
                <h2>Coming Soon</h2>
                <p>
                  More{" "}
                  {selectedCategory === "all"
                    ? "memories"
                    : categories
                        .find((cat) => cat.id === selectedCategory)
                        ?.name.toLowerCase()}{" "}
                  will be added here soon!
                </p>
                <div className={styles.comingSoonIcon}>📸</div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.lightbox}
            onClick={closeLightbox}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeLightbox}>
                ×
              </button>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevImage}
              >
                ‹
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextImage}
              >
                ›
              </button>

              <div className={styles.lightboxImage}>
                {selectedImage.video ? (
                  <video
                    ref={videoRef}
                    src={selectedImage.src}
                    className={styles.videoDisplay}
                    controls
                    autoPlay
                    loop
                  />
                ) : (
                  <div
                    className={styles.imageDisplay}
                    style={{ backgroundImage: `url(${selectedImage.src})` }}
                  />
                )}
                <div className={styles.imageCaption}>
                  <h3>{selectedImage.alt}</h3>
                  <p>
                    {
                      categories.find(
                        (cat) => cat.id === selectedImage.category
                      )?.name
                    }
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.ctaContent}
          >
            <h2>More Memories to Come</h2>
            <p>
              Join us on our special day to create even more beautiful memories
              together
            </p>
            <Link href="/rsvp" className={styles.ctaButton}>
              RSVP Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
