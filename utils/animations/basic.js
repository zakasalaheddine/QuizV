export const FadeInAnnimation = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export const SlideFromRightToLeft = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: { x: -300, opacity: 0 },
};
