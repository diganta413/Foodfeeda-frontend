import { message } from "antd";

const styles = {
    message: {
        marginTop: "10vh",
        fontSize: "1.2rem",
        fontWeight: "500",
    },
};

export const errorResponse = (state, action) => {
    const { message: errorMessage, success } = action.payload;
    if (!success) {
        state.loading = false;
        message.error(
            {
                content: errorMessage,
                style: styles.message,
            },
            6000
        );
    }
};

export const commonError = (error) => {
    return message.error(
        {
            content: error,
        },
        4000
    );
};
