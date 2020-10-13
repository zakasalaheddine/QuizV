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

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

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
