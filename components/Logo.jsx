import { ImageLogo } from "components/StyledTags";
import { FadeInAnnimation } from "components/FramerMotionAnnimations";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <a>
        <ImageLogo initial="hidden" animate="visible" variants={FadeInAnnimation}
          src="/logo.png"
          alt="Logo"
          className="img-fluid mx-auto d-block" />
      </a>
    </Link>
  )
}