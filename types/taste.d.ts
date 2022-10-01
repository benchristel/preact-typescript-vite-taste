declare module "@benchristel/taste" {
  export function curry<A1, A2, Ret>(
    f: (a1: A1, a2: A2) => Ret,
    name: string,
  ): (a: A1) => (a: A2) => Ret
  export function equals(a: any, b: any): boolean
  export function test(subject: string, examples: any): void
  export function expect(a: any, comparator: any, b: any)
  export function is()
  export function not(matcher: (a: () => any) => (a: any) => boolean)
  export function which(a: (a: any) => boolean)
  export function runTests(a: TestSet): Promise
  export function getAllTests(): TestSet
  export function formatTestResultsAsText(results: any): string
  export function createSuite(): {test: any; getAllTests: any}
}
