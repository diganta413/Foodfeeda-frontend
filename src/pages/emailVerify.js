import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EmailVerify() {
    const [token, settoken] = useState("");

    useEffect(() => {
        settoken(findGetParameter("token"));
    }, []);

    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        window.location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName)
                    result = decodeURIComponent(tmp[1]);
            });
        return result;
    }

    return <div>{token ? <h1>Email Verified</h1> : <h1>Wrong token</h1>}</div>;
}

export default EmailVerify;
