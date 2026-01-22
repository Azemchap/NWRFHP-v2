import { Variants, Transition } from "framer-motion";

// ============================================
// EASING CURVES
// ============================================

export const easings = {
  easeOut: [0.22, 1, 0.36, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springBouncy: { type: "spring", stiffness: 400, damping: 25 },
  springSmooth: { type: "spring", stiffness: 200, damping: 35 },
} as const;

// ============================================
// FADE ANIMATIONS
// ============================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOut,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// SLIDE ANIMATIONS
// ============================================

export const slideInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOut,
    },
  },
};

export const slideInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easings.easeOut,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// SCALE ANIMATIONS
// ============================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

export const scaleInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 25,
    },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20,
    },
  },
};

// ============================================
// STAGGER CONTAINERS
// ============================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// CARD ANIMATIONS
// ============================================

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgb(0 20 220 / 0.15)",
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// COUNTER ANIMATION
// ============================================

export const counterVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

// ============================================
// PARALLAX VARIANTS
// ============================================

export const parallaxVariants = (offset: number = 50): Variants => ({
  hidden: { y: 0 },
  visible: {
    y: offset,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
});

// ============================================
// HOVER & PRESS STATES
// ============================================

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const hoverScaleSubtle = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const buttonPress = {
  rest: { scale: 1 },
  press: {
    scale: 0.97,
    transition: {
      duration: 0.1,
    },
  },
};

export const tapScale = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.02 },
};

// ============================================
// IMAGE ANIMATIONS
// ============================================

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// TEXT ANIMATIONS
// ============================================

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
    },
  },
};

export const letterStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

export const letterReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// PAGE TRANSITIONS
// ============================================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.easeIn,
    },
  },
};

// ============================================
// DRAWER / MODAL ANIMATIONS
// ============================================

export const drawerSlide: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// ============================================
// SECTION ANIMATIONS
// ============================================

export const sectionFadeIn: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

export const sectionSlideIn: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
    },
  },
};

// ============================================
// FLOATING / PULSE ANIMATIONS
// ============================================

export const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(0, 20, 220, 0.2)",
    "0 0 40px rgba(0, 20, 220, 0.4)",
    "0 0 20px rgba(0, 20, 220, 0.2)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// ============================================
// HERO SPECIFIC ANIMATIONS
// ============================================

export const heroTitle: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easings.easeOut,
      delay: 0.2,
    },
  },
};

export const heroSubtitle: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
      delay: 0.4,
    },
  },
};

export const heroCTA: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOut,
      delay: 0.6,
    },
  },
};

// ============================================
// UTILITY: Create delay variants
// ============================================

export const withDelay = (variants: Variants, delay: number): Variants => {
  const result: Variants = { ...variants };
  if (result.visible && typeof result.visible === "object") {
    result.visible = {
      ...result.visible,
      transition: {
        ...(result.visible.transition as object),
        delay,
      },
    };
  }
  return result;
};

// ============================================
// UTILITY: Viewport settings
// ============================================

export const viewportConfig = {
  once: true,
  margin: "-100px",
  amount: 0.3,
};

export const viewportConfigEager = {
  once: true,
  margin: "-50px",
  amount: 0.1,
};
