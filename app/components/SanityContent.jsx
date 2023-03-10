import React from "react";
import { PortableText } from "@portabletext/react";

import SanityImage from "~/components/SanityImage";

const components = {
  types: {
    image: SanityImage,
  },
};

export default function SanityContent(props) {
  const { value } = props;

  return (
    <div className="prose font-serif prose-a:text-cyan-600 dark:prose-invert dark:prose-a:text-cyan-200 md:prose-2xl">
      <PortableText value={value} components={components} />
    </div>
  );
}
