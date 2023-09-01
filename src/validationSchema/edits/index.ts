import * as yup from 'yup';

export const editValidationSchema = yup.object().shape({
  content: yup.string().required(),
  status: yup.string().required(),
  editor_id: yup.string().nullable().required(),
  paper_id: yup.string().nullable().required(),
});
