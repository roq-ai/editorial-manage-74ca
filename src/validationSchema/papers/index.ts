import * as yup from 'yup';

export const paperValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  status: yup.string().required(),
  plagiarism_check: yup.boolean().required(),
  relevancy_check: yup.boolean().required(),
  author_id: yup.string().nullable().required(),
});
