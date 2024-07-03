import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ForumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="discussion" multiline source="discussion" />
        <BooleanInput label="studyGroup" source="studyGroup" />
      </SimpleForm>
    </Edit>
  );
};
