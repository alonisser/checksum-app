const {createChecksum, createBinaryArrayChecksum} = require('./index');

describe("Checksum svc spec",()=>{
    describe("create checksum function",()=>{
        it('should return correct checksum for array of binary strings',()=>{
            const inputBinary = ['0001', '0010', '0000', '1000'];
            const res = createChecksum(inputBinary);
            expect(res).toBe('0100')
        })

        it('should return correct checksum by the length of longest string for array of variable length binary strings',()=>{
            const inputBinary = ['0001', '00010', '0000', '10000']; // Total 16+1+2 = 19
            const res = createChecksum(inputBinary);
            expect(res).toBe('01100') // e.g 31 - 19
        })
        
    })

    describe("calculateChecksumForBytes function", ()=>{
        it("Should calculate checksums for an array of binary numbers",()=>{
            const inputs = [[0,0,1,0],[0,0,0,1]]
            const res = createBinaryArrayChecksum(inputs);

            expect(res).toEqual([1,1,0,0])
        })
    })
})