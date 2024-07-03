import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { CourseMaterialList } from "./courseMaterial/CourseMaterialList";
import { CourseMaterialCreate } from "./courseMaterial/CourseMaterialCreate";
import { CourseMaterialEdit } from "./courseMaterial/CourseMaterialEdit";
import { CourseMaterialShow } from "./courseMaterial/CourseMaterialShow";
import { GradeList } from "./grade/GradeList";
import { GradeCreate } from "./grade/GradeCreate";
import { GradeEdit } from "./grade/GradeEdit";
import { GradeShow } from "./grade/GradeShow";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { LibraryResourceList } from "./libraryResource/LibraryResourceList";
import { LibraryResourceCreate } from "./libraryResource/LibraryResourceCreate";
import { LibraryResourceEdit } from "./libraryResource/LibraryResourceEdit";
import { LibraryResourceShow } from "./libraryResource/LibraryResourceShow";
import { FeedbackList } from "./feedback/FeedbackList";
import { FeedbackCreate } from "./feedback/FeedbackCreate";
import { FeedbackEdit } from "./feedback/FeedbackEdit";
import { FeedbackShow } from "./feedback/FeedbackShow";
import { HealthServiceList } from "./healthService/HealthServiceList";
import { HealthServiceCreate } from "./healthService/HealthServiceCreate";
import { HealthServiceEdit } from "./healthService/HealthServiceEdit";
import { HealthServiceShow } from "./healthService/HealthServiceShow";
import { ForumList } from "./forum/ForumList";
import { ForumCreate } from "./forum/ForumCreate";
import { ForumEdit } from "./forum/ForumEdit";
import { ForumShow } from "./forum/ForumShow";
import { DiningMenuList } from "./diningMenu/DiningMenuList";
import { DiningMenuCreate } from "./diningMenu/DiningMenuCreate";
import { DiningMenuEdit } from "./diningMenu/DiningMenuEdit";
import { DiningMenuShow } from "./diningMenu/DiningMenuShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CollegeMobileApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="CourseMaterial"
          list={CourseMaterialList}
          edit={CourseMaterialEdit}
          create={CourseMaterialCreate}
          show={CourseMaterialShow}
        />
        <Resource
          name="Grade"
          list={GradeList}
          edit={GradeEdit}
          create={GradeCreate}
          show={GradeShow}
        />
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="LibraryResource"
          list={LibraryResourceList}
          edit={LibraryResourceEdit}
          create={LibraryResourceCreate}
          show={LibraryResourceShow}
        />
        <Resource
          name="Feedback"
          list={FeedbackList}
          edit={FeedbackEdit}
          create={FeedbackCreate}
          show={FeedbackShow}
        />
        <Resource
          name="HealthService"
          list={HealthServiceList}
          edit={HealthServiceEdit}
          create={HealthServiceCreate}
          show={HealthServiceShow}
        />
        <Resource
          name="Forum"
          list={ForumList}
          edit={ForumEdit}
          create={ForumCreate}
          show={ForumShow}
        />
        <Resource
          name="DiningMenu"
          list={DiningMenuList}
          edit={DiningMenuEdit}
          create={DiningMenuCreate}
          show={DiningMenuShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
