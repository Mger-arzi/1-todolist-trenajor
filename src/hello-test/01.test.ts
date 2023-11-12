import { mult, sum } from "./01"

test("sum proverka", ()=>{
	let a = 1
	let b = 2
	let c = 3

	let result1 = sum(a,b)

	expect(result1).toBe(3)
})



test("multy proverka", ()=>{
	let a = 1
	let b = 2
	let c = 3

	let result1 = mult(a,b)

	expect(result1).toBe(2)
})