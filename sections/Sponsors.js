import { useAsync } from 'react-async-hook';
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import Image from 'next/image';;

import { getListByType } from '../services/pages';

export default function Sponsors() {
  const getList = useAsync(async () => {
    const page = await getListByType('sponsor');
    const data = page.filter(({ data }) => (
      new Date(data.date_start) <= new Date() && new Date(data.date_end) >= new Date()
    ));

    return data;
  });

  const groupBySponsorshipType = getList.result
    ?.reduce((groups, page) => {
      const type = page.data.sponsorship_type.toLowerCase();
      const group = groups?.[type] || [];

      group.push(page);
      groups[type] = group;

      return groups;
    }, {}) || [];

  const {
    platinum: sponsorshipsHighlight,
    ...sponsorships
  } = groupBySponsorshipType || { platinum: [] };
  const sponsorshipsList = Object.values(sponsorships);

  return (
    <div>
      {sponsorshipsHighlight?.map(({ data: details, id }) => (
        <div key={id}>
          <div className="
            grid
            grid-cols-1
            lg:grid-cols-[auto_1fr]
            gap-12
          ">
            <div>
              <Image
                src={details.logo.highlight.url}
                alt={details.logo.highlight.alt}
                width={details.logo.highlight.dimensions.width}
                height={details.logo.highlight.dimensions.height}
                className="
                  border-2
                  border-black
                  z-[1]
                  hover:translate-x-2
                  hover:-translate-y-2
                  transition-transform
                  sticky
                  top-0
                "
              />
            </div>

            <div>
              <PrismicRichText field={details.name} />

              <div className="
                lg:border-l-2
                lg:border-gray
                lg:pl-12
              ">
                <span className="
                  block
                  mb-4
                ">
                  <PrismicLink
                    field={details.url}
                      className="
                      hover:text-blue
                      transition
                    "
                  >
                    {details.url.url}
                  </PrismicLink>
                </span>

                <PrismicRichText
                  field={details.description}
                  components={{
                    embed: ({ node, key }) => (
                      <>
                        <div
                          key={key}
                          data-oembed={node.oembed.embed_url}
                          data-oembed-type={node.oembed.type}
                          data-oembed-provider={node.oembed.provider_name}
                          dangerouslySetInnerHTML={{ __html: node.oembed.html ?? '' }}
                          className="
                            w-full
                            h-[120px]
                            lg:h-[450px]
                            highlight-video
                          "
                        />

                        <style jsx>{`
                          iframe {
                            width: 100%;
                            height: 100%;
                          }
                        `}</style>
                      </>
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
