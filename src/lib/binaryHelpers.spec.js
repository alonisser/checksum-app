const {addBinary, subBinary, leftPadZero, leftPadOne, binaryArrToValue} = require('./binaryHelpers');

describe("Binary helpers spec",()=>{
    describe("left pad zero",()=>{
        it('it should add 2 left zero for 11  with expected length of 51',()=>{
            const res = leftPadZero('11', 4);
            expect(res).toBe('0011')
        })

        it('it should not pad zero for 0011 with expected length of 5',()=>{
            const res = leftPadZero('0011', 4);
            expect(res).toBe('0011')
        })
    })

    describe("Add binary strings", ()=>{
        it("Should add binary strings correctly", ()=>{
            const res = addBinary("0001", "0001")
            expect(res).toBe("0010")
        })
    })

    describe("Subtract binary strings", ()=>{
        it("Should subtract binary strings correctly", ()=>{
            const res = subBinary("0100", "0001")
            expect(res).toBe("0011")
        })
    })

    describe("binaryArrToValue", ()=>{
        it("Should calculate binary to numbers correctly", ()=>{
            let res = binaryArrToValue([0,1,0,0])
            expect(res).toBe(4)

            res = binaryArrToValue([1,1,1,1,1,1,1,1])
            expect(res).toBe(255)

            res = binaryArrToValue([1,0,0,0,0,0,0,0])
            expect(res).toBe(128)
        })
    })
})