import React from "react";

export type PageInterface<T> = {
  component: React.ComponentType<T>;
  title: string;
  hideFromMenu?: boolean;
};
