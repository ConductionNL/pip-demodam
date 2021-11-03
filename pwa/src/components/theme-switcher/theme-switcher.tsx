import * as React from 'react';
import {Fragment, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import {useScript} from 'usehooks-ts';

const ThemeSwitcher = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const themeSwitcherScript = useScript(
    'https://unpkg.com/@nl-design-system-unstable/theme-switcher'
  );

  useEffect(() => {
    if (themeSwitcherScript === 'ready') {
      setScriptLoaded(true);
    }
  }, [themeSwitcherScript]);


  return (
    <Fragment>
      <Helmet>
        <link
          href="https://unpkg.com/@utrecht/component-library-css/dist/bem.css"
          rel="stylesheet"
        />

        <meta name="theme-color" content="hsl(0 0% 95%)" />
      </Helmet>
      {scriptLoaded && (
        // @ts-ignore
        <nl-theme-switcher // @ts-ignore
          target=".utrecht-document"
          themes={JSON.stringify([
            {
              className: 'amsterdam-theme',
              title: 'Gemeente Amsterdam',
              href: 'https://unpkg.com/@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css',
            },
            {
              className: 'bodegraven-theme',
              title: 'Gemeente Bodegraven',
              href: 'https://unpkg.com/@nl-design-system-unstable/bodegraven-design-tokens/dist/index.css',
            },
            {
              className: 'borne-theme',
              title: 'Gemeente Borne',
              href: 'https://unpkg.com/@nl-design-system-unstable/borne-design-tokens/dist/index.css',
            },
            {
              className: 'drechterland-theme',
              title: 'Gemeente Drechterland',
              href: 'https://unpkg.com/@nl-design-system-unstable/drechterland-design-tokens/dist/index.css',
            },
            {
              className: 'utrecht-theme',
              title: 'Gemeente Utrecht',
              href: 'https://unpkg.com/@utrecht/design-tokens/dist/theme/index.css',
            },
            {
              className: 'haarlemmermeer-theme',
              title: 'Gemeente Haarlemmermeer',
              href: 'https://unpkg.com/@nl-design-system-unstable/haarlemmermeer-design-tokens/dist/index.css',
            },
            {
              className: 'hoorn-theme',
              title: 'Gemeente Hoorn',
              href: 'https://unpkg.com/@nl-design-system-unstable/hoorn-design-tokens/dist/index.css',
            },
            {
              className: 'westervoort-theme',
              title: 'Gemeente Westervoort',
              href: 'https://unpkg.com/@nl-design-system-unstable/westervoort-design-tokens/dist/index.css',
            },
          ])}
        />
      )}
    </Fragment>
  );
};

export {ThemeSwitcher};
