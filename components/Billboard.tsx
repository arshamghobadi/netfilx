import useBillboard from '../hooks/useBillboard';
import React from 'react';

type Props = {};

function Billboard({}: Props) {
  const { data } = useBillboard();
  console.log(data);

  return (
    <div className=" relative h-[56.25vw]">
      <video
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}
      ></video>
    </div>
  );
}

export default Billboard;
