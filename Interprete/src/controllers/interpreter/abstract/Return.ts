export enum Type{
  INT = 0,
  DOUBLE = 1,
  BOOLEAN = 2,
  CHAR = 3,
  STRING = 4,
  NULL = 5,
  RETURN = 6,
}


export type Return = {
  value: any,
  type: Type
}
