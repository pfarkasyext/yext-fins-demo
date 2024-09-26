import { DirectAnswer } from "@yext/search-ui-react";
import * as React from "react";
import { Button } from "../common/Button";
import Icon from "../atoms/Icon";

const CustomDA = ({ data }: any) => {
  return (
    <>
      {/* <DirectAnswer /> */}
      {/* <div>{JSON.stringify(da)}</div>
                      <div>{da.value}</div> */}
      <div className="p-4 border rounded-lg">
        <div className="mb-4 text-xl font-bold">{data.value}</div>
        <div className="mb-8">... {data.snippet.value} ...</div>
        <a
          className="font-bold flex flex-row gap-2"
          href={data.relatedResult.rawData.c_file.url}
        >
          {/* <Button>View Full Document</Button> */}
          From PDF:
          <span className="underline">{data.relatedResult.name}</span>
          <Icon name="pdf" classname="text-red-700" height="5" width="5" />
        </a>
      </div>
    </>
  );
};

export default CustomDA;
