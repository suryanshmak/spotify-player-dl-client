import { DefaultSeo } from "next-seo";

export const Meta = ({
  title = "Spotify Player DL",
  description = "Link playlist scripts",
  url = "spotify-player-dl.vercel.app",
}) => (
  <>
    <DefaultSeo
      title={title}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: `${url}/seo-img.png`,
            height: 1212,
            width: 2114,
            alt: "",
          },
        ],
        site_name: title,
      }}
    />
  </>
);
