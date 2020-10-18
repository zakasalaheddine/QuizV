import { PLATFORMS, getSocialMediaUrl } from "helpers/ShareQuizHelpers";
import ShareButton from "./ShareButton";

export default function ShareButtons({ url, lang, quiz }) {
  return (
    <div className="buttons my-5">
      <ShareButton href={getSocialMediaUrl(PLATFORMS.FACEBOOK, url)}
        backColor="#3b5998"
        icon="fab fa-facebook-f"
        platform="Facebook"
        lang={lang} />
      <ShareButton href={getSocialMediaUrl(PLATFORMS.WHATSAPP, `How Well do you know me ? ${url}`)}
        backColor="#1cb06d"
        icon="fab fa-whatsapp"
        platform="Whatsapp"
        lang={lang} />
      <ShareButton href={getSocialMediaUrl(PLATFORMS.TWIITER, `How Well do you know me ? ${url}`)}
        backColor="#1da1f2"
        icon="fab fa-twitter"
        platform="Twitter"
        lang={lang} />
      <ShareButton
        href="/[quiz]/instagram"
        as={`/${quiz}/instagram`}
        backColor="#e4405f"
        icon="fab fa-instagram"
        platform="Instagram's Bio"
        lang={lang}
      />
      <ShareButton
        href="/[quiz]/whatsapp"
        as={`/${quiz}/whatsapp`}
        backColor="#1cb06d"
        icon="fab fa-whatsapp"
        platform="Whatsapp Status"
        lang={lang}
      />
      <ShareButton
        href="/[quiz]/snapchat"
        as={`/${quiz}/snapchat`}
        backColor="#fffc00"
        icon="fab fa-snapchat"
        platform="Snapchat"
        lang={lang}
        withDarkText={true}
      />
    </div>
  )
}