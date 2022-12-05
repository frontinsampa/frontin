import * as React from 'react';
import { useAsync } from 'react-async-hook';
import { PrismicRichText, PrismicImage } from '@prismicio/react';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/pt-br';

import { getListByType } from '../services/pages';
import Button from '../components/Button';
import Image from '../components/Image';

/**
 * @todo move all dayjs to another file as helper function
 */
dayjs.extend(localizedFormat);
dayjs.locale('pt-br')


const CUSTOM_TYPE = 'conference';

export default function Conferences() {
  const getList = useAsync(async () => {
    const page = await getListByType(CUSTOM_TYPE);
    const data = page
      .filter(({ data }) => new Date(data.date) > new Date())
      .sort((a, b) => {
        const dateA = new Date(a.data.date);
        const dateB = new Date(b.data.date);

        if(dateA < dateB) {
          return -1;
        }

        if (dateA > dateB) {
          return 1;
        }

        return 0;
      });

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

  console.log(list)

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
                    {details.date_defined && (
                      dayjs(new Date(details.date)).format('D MMMM')
                    )}

                    {!details.date_defined && (
                      dayjs(new Date(details.date)).format('MMMM')
                    )}
                  </span>

                  <Image
                    field={details.image.main}
                    widths={[
                      264,
                      528,
                      792,
                     ]}
                    color="yellow"
                  />
                </div>

                {details.available && (
                  <Button
                    href={details.subscribe.url}
                    target="_blank"
                    className="w-[264px]"
                  >
                    Inscreva-se
                  </Button>
                )}

                {!details.available && (
                  <Button
                    className="
                      w-[264px]
                    "
                  >
                    Em breve
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
