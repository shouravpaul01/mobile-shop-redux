export type TBrandFromdata = {
    _id?: string;
    name: string;
    description?: string;
    status?:boolean;
  };
  
  export type TBrandTableProps={
    brands:TBrandFromdata[];
  }
  export type TErrorMessage = {
    path:string,
    message:string
  };