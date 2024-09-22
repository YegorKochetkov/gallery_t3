export type OneOf<
	TypesArray extends unknown[],
	Result = never,
> = TypesArray extends [infer Head, ...infer Tail]
	? OneOf<Tail, Result | Head>
	: Result;
