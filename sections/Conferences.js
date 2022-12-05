import * as React from 'react';
import { useAsync } from 'react-async-hook';
import Image from 'next/image';
import { PrismicRichText, PrismicImage } from '@prismicio/react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt-br';

import { getListByType } from '../services/pages';
import Button from '../components/Button';

/**
 * @todo move all dayjs to another file as helper function
 */
dayjs.extend(localizedFormat);
dayjs.locale('pt-br')


const CUSTOM_TYPE = 'conference';

export default function Conferences() {
  const getList = useAsync(async () => {
    const page = await getListByType(CUSTOM_TYPE);
    const data = page.filter(({ data }) => new Date(data.date) > new Date());

    return data;
  });

  const groupListResultByYear = getList.result
    ?.reduce((groups, data) => {
      const year = new Date(data.data.date).getFullYear();
      const group = groups?.[year] || [];

      group.push(data);
      groups[year] = group;

      return groups;
    }, {}) || [];

  const list = Object.values(groupListResultByYear);
  const years = Object.keys(groupListResultByYear);

  return (
    <div className="relative">
      {list.map((conferences, i) => (
        <div
          key={i}
          className="
            grid
            grid-cols-[1fr,_128px]
            items-end
            relative
            mb-[80px]
          "
        >
          <div
            className="
              relative
              order-last
              h-full
            "
          >
            <span
              className="
                sticky
                top-0
                block
                before:block
                before:h-[285px]
                before:w-full
              "
            >
              <span
                className="
                  absolute
                  top-0
                  right-0
                  rotate-90
                  origin-[0_0]
                  font-heading
                  uppercase
                  translate-x-full
                  text-9xl
                  font-semibold
                  text-gray
                "
              >
                {years[i]}
              </span>
            </span>
          </div>

          <div
            className="
              grid
              gap-4
              grid-cols-[repeat(4,_289px)]
              overflow-x-auto
              auto-rows-auto
              items-end
            "
          >

            {conferences.map(({ id, data: details }) => (
              <div
                key={id}
                className="
                  w-[289px]
                  relative
                  pl-7
                "
              >
                <PrismicRichText
                  field={details.name}
                  components={{
                    heading2: ({ children }) => (
                      <h3 className="mb-4">
                        {children}
                      </h3>
                    ),
                  }}
                />

                <div className="
                  w-[264px]
                  mb-4
                  relative
                ">
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      -rotate-90
                      origin-bottom-left
                      font-heading
                      uppercase
                    "
                  >
                    {dayjs(new Date(details.date)).format('D MMMM')}
                  </span>

                  <div className="relative">
                    {details.image?.main?.url && (
                      <PrismicImage
                        field={details.image.main}
                        widths={[
                          264,
                          528,
                          792,
                         ]}
                        pixelDensities="defaults"
                        className="
                          border-2
                          border-black
                          relative
                          z-[1]
                          hover:translate-x-2
                          hover:-translate-y-2
                          transition-transform
                          w-full
                          h-full
                          object-cover
                        "
                      />
                    )}

                    {!details.image?.main?.url && (
                      <img src="https://via.placeholder.com/264x195" />
                    )}

                    <span className="
                      absolute
                      top-0
                      left-0
                      w-full
                      h-full
                      bg-red
                    " />
                  </div>
                </div>

                <Button
                  href={details.subscribe.url}
                  target="_blank"
                  className="w-[264px]"
                >
                  Inscreva-se
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
