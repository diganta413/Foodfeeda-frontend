import { message } from "antd";

const styles = {
    message: {
        marginTop: "10vh",
        fontSize: "1.2rem",
        fontWeight: "500",
    },
};

export const SuccessResponse = (state, action) => {
    const { message: errorMessage, success } = action.payload;
    if (!success) {
        state.loading = false;
        message.success(
            {
                content: errorMessage,
                style: styles.message,
            },
            6000
        );
    }
};

export const commonSuccess = (msg) => {
    return message.success(
        {
            content: msg,
        },
        2000
    );
};
