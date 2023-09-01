import * as yup from 'yup';

export const publicationValidationSchema = yup.object().shape({
  status: yup.string().required(),
  editor_in_chief_id: yup.string().nullable().required(),
  paper_id: yup.string().nullable().required(),
});
