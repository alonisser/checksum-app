import React from "react";

function Explanation(props){
    return (
        <div className={"explanation"}>
            <p>
                How checksums are calculated in this example? Basically we sum all the bytes and subtract the result
                from a "full" (11111111) Byte.
            </p>

            <p>
                The elegance of using checksum in a network protocol is that while errors are totally possible,
                we don't need a different source of authority (outside the network stream) to detect them.

            </p>
            <p>
                It's not conceivable (or at least a low priority of) that another error would flip the exact same bits needed
                for an erroneous checksum to exactly match the expected checksum for the erroneous bytes.
            </p>
        </div>
    )
}

export default Explanation