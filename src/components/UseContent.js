import {ReactElement, Suspense} from 'react';
import {useContent} from '@croct/plug-react';
import {Slot} from '@croct/plug-react';

type HomeBannerContent = {
  title: string,
  subtitle: string,
  cta: {
      label: string,
      link: string,
  },
};

function HomeBanner(): ReactElement {
    const {title, subtitle, cta} = useContent<HomeBannerContent>('home-banner');

    return (
        <div>
            <strong>{title}</strong>
            <p>{subtitle}</p>
            <a href={cta.link}>{cta.label}</a>
        </div>
    )
}

export default function HomePage(): ReactElement {
    return (
        <Suspense fallback="Personalizing content...">
            <Slot id="home-banner" initial={null}>
            {(props: HomeBannerContent|null) => (
                props === null 
                    ? '✨ Personalizing...'
                    : (
                        <div>
                            <strong>{props.title}</strong>
                            <p>{props.subtitle}</p>
                            <a href={props.cta.link}>{props.cta.label}</a>
                        </div>    
                    )
            )}
            </Slot>
        </Suspense>
    )
}