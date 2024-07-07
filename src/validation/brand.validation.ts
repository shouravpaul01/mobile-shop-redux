import * as yup from 'yup';
const brandSchemaValidation=yup.object({
    name:yup.string().required("Name is required."),
})

export {brandSchemaValidation}