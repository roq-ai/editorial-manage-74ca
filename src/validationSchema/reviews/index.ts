import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  comment: yup.string().required(),
  status: yup.string().required(),
  reviewer_id: yup.string().nullable().required(),
  paper_id: yup.string().nullable().required(),
});
