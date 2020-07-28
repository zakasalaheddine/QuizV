export const PLATFORMS = {
  FACEBOOK: "FACEBOOK",
  TWIITER: "TWITTER",
  MESSENGER: "MESSENGER",
  WHATSAPP: "WHATSAPP",
};

export const getSocialMediaUrl = (platform, url) => {
  switch (platform) {
    case PLATFORMS.FACEBOOK:
      return `https://www.facebook.com/sharer.php?u=${url}`;
    case PLATFORMS.WHATSAPP:
      return `whatsapp://send?text=${url}`;
    case PLATFORMS.TWIITER:
      return `https://twitter.com/share?url=${url}`;
    default:
      return url;
  }
};
