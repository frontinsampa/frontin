/**
 * copy-paste do arquivo sections/Sponsors.js
 * e ambos precisam ser refatorados para a nova arquitetura
 */
import { useAsync } from 'react-async-hook';

import { getListByType } from '../services/pages';
import Image from '../components/Image';
import Link from '../components/Link';

export default function Partner() {
  const {
    loading,
    result: list,
  } = useAsync(getListByType, ['partner']);

  if (loading) {
    return null;
  }

  return (
    <div>
      <div
        className={`
          flex
          flex-wrap
          gap-4
        `}
      >
        {list?.map(({ data: details }, i) => (
          <div key={i}>
            <Link
              href={details.url}
              title={details.name}
            >
              <Image
                field={details.logo}
                color="green"
                fill
                alt={details.name}
                className={`
                  w-[100px]
                  h-[100px]
                `}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
