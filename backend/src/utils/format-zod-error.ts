import { ZodIssue, ZodIssueCode } from 'zod';

export const formatZodErrors = (errors: ZodIssue[]): object => {
  const output = {} as object;
  const flattenErrors = [] as ZodIssue[];

  errors.map((error: ZodIssue) => {
    if (error.code === ZodIssueCode.invalid_union) {
      error.unionErrors.map((unionError) => {
        unionError.issues.map((_error) => flattenErrors.push(_error));
      });
    } else {
      flattenErrors.push(error);
    }
  });

  flattenErrors.map((error: ZodIssue) => {
    const pathName = error.path.join('.') || '_unknown_';

    if (!output[pathName]) {
      output[pathName] = [];
    }

    if (!output[pathName].includes(error.message)) {
      output[pathName].push(error.message);
    }
  });

  return output;
};
