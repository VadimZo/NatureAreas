export type AreaItems = {
  name: string;
  images?: Image[];
  address?: string;
  phone?: string;
  email?: string;
  description?: string;
  coordinates?: number[];
  geometryArea?: Object;
  htmlInfo?: string;
  files?: File[];
};

export type Image = {
  url: string;
};

export type File = {
  title: string;
  desc: string;
  url: string;
  date: string;
  number: string;
};

export type AreaProps = {
  title: string;
  items: AreaItems[];
};
