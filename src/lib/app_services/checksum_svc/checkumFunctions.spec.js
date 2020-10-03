const {createChecksum} = require('./index');

describe("Checksum svc spec",()=>{
    describe("create checksum function",()=>{
        it('it should return correct checksum for array of binary strings',()=>{
            const inputBinary = ['0001', '0010', '0000', '1000'];
            const res = createChecksum(inputBinary);
            expect(res).toBe('0100')
        })

        it('it should return correct checksum by the length of longest string for array of variable length binary strings',()=>{
            const inputBinary = ['0001', '00010', '0000', '10000']; // Total 16+1+2 = 19
            const res = createChecksum(inputBinary);
            expect(res).toBe('01100') // e.g 31 - 19
        })


    })
})