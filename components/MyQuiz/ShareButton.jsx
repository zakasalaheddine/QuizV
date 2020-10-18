import { Translate } from "lang/StaticTexts";
import Link from "next/link";
import { item } from "animations/basic";
import { LinkAsBuuton } from "styled/StyledTags";

export default function ShareButton({ href, backColor, icon, platform, lang, as, withDarkText = false }) {
  return (
    <Link href={href} as={as} passHref={as ? false : true}>
      <LinkAsBuuton
        variants={item}
        backColor={backColor} className={withDarkText ? 'btn btn-block py-2 text-dark' : 'btn btn-block py-2 '}
        target={as ? '' : '_blank'}>
        <i className={icon}></i> {Translate["Share Quiz on"][lang]} {platform}
      </LinkAsBuuton>
    </Link>
  )
}