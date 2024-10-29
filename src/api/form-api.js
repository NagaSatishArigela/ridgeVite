import ApiClient from "./client"

const FormApi = {
    basePath: '/sendTemplateMessage?whatsappNumber=',

    async whatsAppForm(payload, number) {
        return ApiClient._post(`${this.basePath}${number}`, {
            data: payload,
        }).then((resp) => {
            let returnResponse = resp?.data;
            return returnResponse;
        })
    }
};

export default FormApi;