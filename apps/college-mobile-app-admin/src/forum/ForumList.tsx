import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ForumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Forums"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="discussion" source="discussion" />
        <TextField label="ID" source="id" />
        <BooleanField label="studyGroup" source="studyGroup" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
