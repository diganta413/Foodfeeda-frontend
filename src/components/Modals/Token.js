import React, { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { Modal, Button, Row } from "antd";

function Token() {
    const [visible, setvisible] = useState(false);
    const access = getCookie("access_token");

    useEffect(() => {
        if (!access) setvisible(true);
    }, []);

    return (
        <Modal
            visible={visible}
            onCancel={() => setvisible(false)}
            footer={null}
        >
            <h2 className="ml-[15%]">Session Token has expired</h2>
            <Row className="mt-[20px] ml-[30%]">
                <Button>Extend</Button>
                <Button className="ml-[10px]">Log Out</Button>
            </Row>
        </Modal>
    );
}

export default Token;
