import { useAsync } from 'react-async-hook';
import { PrismicRichText, PrismicLink } from '@prismicio/react'

import { getListByType } from '../services/pages';
import Image from '../components/Image';

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
              <div className="
                sticky
                top-4
              ">
                <Image
                  field={details.logo.highlight}
                  color="pink"
                />
              </div>
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

                        <style jsx="true">{`
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
