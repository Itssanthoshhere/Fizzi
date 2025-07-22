import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx';

type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    classname: string;
}

export default function Button({ buttonLink, buttonText, classname }: Props) {
    return (
        <PrismicNextLink
            className={clsx(
                "duration-150 rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-700 md:text-2xl",
                classname,
            )}
            field={buttonLink}>
            {buttonText}
        </PrismicNextLink>
    )
}