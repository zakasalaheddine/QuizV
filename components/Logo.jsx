import { ImageLogo } from "components/StyledTags";
import Link from "next/link";
import { FadeInAnnimation } from "../helpers/FramerMotionAnimationValues";
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